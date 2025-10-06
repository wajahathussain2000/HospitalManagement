export type Message = { 
  role: "user" | "assistant"; 
  content: string;
};

export type ChatContext = {
  type?: "claims" | "clinical" | "patient";
  claimId?: string;
  patientId?: string;
  data?: any;
};

// Mock AI Chat implementation - Replace with your preferred AI service
export async function streamChat({
  messages,
  context,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  context?: ChatContext;
  onDelta: (deltaText: string) => void;
  onDone: () => void;
  onError?: (error: string) => void;
}) {
  // Mock implementation - replace with your AI service
  try {
    const lastMessage = messages[messages.length - 1];
    const mockResponse = generateMockResponse(lastMessage.content, context);
    
    // Simulate streaming response
    const words = mockResponse.split(' ');
    for (let i = 0; i < words.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      onDelta(words[i] + (i < words.length - 1 ? ' ' : ''));
    }
    
    onDone();
  } catch (error) {
    onError?.(error instanceof Error ? error.message : "AI service unavailable");
    onDone();
  }
}

function generateMockResponse(message: string, context?: ChatContext): string {
  const responses = [
    "I understand you're asking about healthcare management. Let me help you with that.",
    "Based on the context provided, here are some recommendations for your hospital management needs.",
    "I can assist you with patient care, billing, or administrative tasks. What specific area would you like help with?",
    "For medical billing and claims management, I recommend reviewing the documentation and following best practices.",
    "This appears to be a clinical inquiry. Please ensure you're following proper medical protocols and guidelines."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}
