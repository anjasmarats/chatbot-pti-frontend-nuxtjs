export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    username: string;
    email?: string;
  };
}

export interface AuthValidationResponse {
  valid: boolean;
  user?: {
    id: string;
    username: string;
    email?: string;
  };
}