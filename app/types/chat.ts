export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  options?: Option[];
  requiresInput?: boolean;
  time?: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface ChatStartResponse {
  message: string;
  options?: Option[];
}

export interface ChatMessageResponse {
  message: string;
  options?: Option[];
  requiresInput?: boolean;
}

export interface ChatMessageRequest {
  sessionId: string;
  message?: string | null;
  feedback?: string | null;
  optionId?: string | null;
}