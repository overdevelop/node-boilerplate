declare module "*";

declare namespace Express {
  export interface Application {
    start: () => void;
  }
}