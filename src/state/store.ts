export interface User {
  username: string;
}

export interface AppState {
  user: User | null;
}

export function createInitialState(): AppState {
  return {
    user: null,
  };
}
