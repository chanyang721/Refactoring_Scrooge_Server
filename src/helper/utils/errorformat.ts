export class ErrorFormat extends Error {
  public statusCode: number;
  public message: string;
  public error: string;

  constructor(statusCode: number, message: string, error?: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}
