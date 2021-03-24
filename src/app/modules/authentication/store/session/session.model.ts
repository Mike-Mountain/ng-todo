export interface SessionUser {
  id: number;
  username: string;
  email: string;
  address: string;
}

export interface SessionState {
  user: SessionUser | undefined;
  token: string | undefined;
}

export function createInitialState(): SessionState {
  return {
    user: undefined,
    token: undefined
  };
}

export function createSession(user: SessionUser, token: string): SessionState {
  return {user, token};
}

export class LoginFormModel {
  username: string | undefined;
  password: string | undefined;

  constructor(options: Partial<LoginFormModel>) {
    this.username = options?.username;
    this.password = options?.password;
  }
}

export class RegisterFormModel {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(options: Partial<RegisterFormModel>) {
    this.username = options?.username;
    this.email = options?.email;
    this.password = options?.password;
  }
}
