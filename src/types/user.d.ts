export interface InitialState {
  user: User;
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface User {
  email: string | null;
}
