export interface RegisterFormData {
  firstName: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthError {
  message: string;
}
