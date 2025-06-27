interface LoginData {
  username: string;
  password: string;
}

interface RegisterData extends LoginData {
  email: string;
}

export type { LoginData, RegisterData };