
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Square, Play, Pause } from 'lucide-react';

interface VoiceTranscriptionProps {
  onTranscription?: (text: string) => void;
}

export function VoiceTranscription({ onTranscription }: VoiceTranscriptionProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognitionClass) {
      recognitionRef.current = new SpeechRecognitionClass() as SpeechRecognition;
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = '';
          let interimText = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              finalTranscript += result[0].transcript;
              setConfidence(result[0].confidence);
            } else {
              interimText += result[0].transcript;
            }
          }

          if (finalTranscript) {
            setTranscript(prev => prev + finalTranscript + ' ');
            if (onTranscription) {
              onTranscription(finalTranscript);
            }
          }
          setInterimTranscript(interimText);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsRecording(false);
        };

        recognitionRef.current.onend = () => {
          setIsRecording(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscription]);

  const startRecording = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsRecording(true);
        setTranscript('');
        setInterimTranscript('');
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to use voice transcription.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  const clearTranscript = () => {
    setTranscript('');
    setInterimTranscript('');
    setConfidence(0);
  };

  const playbackTranscript = () => {
    if (transcript && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(transcript);
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopPlayback = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const isSpeechRecognitionSupported = () => {
    return ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Mic className="h-5 w-5 mr-2" />
            Voice Transcription
          </CardTitle>
          <div className="flex items-center space-x-2">
            {isRecording && (
              <Badge variant="destructive" className="animate-pulse">
                Recording
              </Badge>
            )}
            {confidence > 0 && (
              <Badge variant="secondary">
                Confidence: {Math.round(confidence * 100)}%
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={isRecording ? stopRecording : startRecording}
            variant={isRecording ? "destructive" : "default"}
            size="lg"
            disabled={!isSpeechRecognitionSupported()}
          >
            {isRecording ? (
              <>
                <Square className="h-4 w-4 mr-2" />
                Stop Recording
              </>
            ) : (
              <>
                <Mic className="h-4 w-4 mr-2" />
                Start Recording
              </>
            )}
          </Button>

          {transcript && (
            <>
              <Button
                onClick={isPlaying ? stopPlayback : playbackTranscript}
                variant="outline"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Stop Playback
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Playback
                  </>
                )}
              </Button>

              <Button onClick={clearTranscript} variant="outline">
                Clear
              </Button>
            </>
          )}
        </div>

        <div className="min-h-[100px] p-4 border rounded-lg bg-gray-50">
          <div className="text-sm">
            <div className="text-gray-900">
              {transcript}
              <span className="text-gray-500 italic">
                {interimTranscript}
              </span>
            </div>
            {!transcript && !interimTranscript && (
              <div className="text-gray-500 italic">
                {isRecording 
                  ? "Listening... speak now" 
                  : isSpeechRecognitionSupported()
                    ? "Click 'Start Recording' to begin voice transcription"
                    : "Speech recognition is not supported in this browser"}
              </div>
            )}
          </div>
        </div>

        {!isSpeechRecognitionSupported() && (
          <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
            Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari for voice transcription.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
