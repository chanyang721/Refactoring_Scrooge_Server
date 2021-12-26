import { StatusCode } from "./httpStatusCodes";

export class BaseError extends Error {
  protected readonly statusCode: number;
  protected readonly isOperational: boolean;

  constructor(
    name: string,
    statusCode: StatusCode,
    message: string,
    isOperational?: boolean,
    stack?: string
  ) {
    super(message);
    this.name = name || "Server Error";
    this.statusCode = statusCode || 500;
    this.message = message || "No Error Messages";
    this.isOperational = isOperational || true;
    this.stack = stack || "";
    Error.captureStackTrace(this);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
