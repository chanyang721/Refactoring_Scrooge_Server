import { StatusCode } from "./httpStatusCodes";

export class BaseError extends Error {
  protected statusCode: number;
  protected isOperational: boolean;

  constructor(
    name: string,
    statusCode: StatusCode,
    message: string,
    isOperational?: boolean
  ) {
    super();
    this.name = name || "Server Error";
    this.statusCode = statusCode || 500;
    this.message = message || "No Error Messages";
    this.isOperational = isOperational || true;
    Error.captureStackTrace(this);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class Api400Error extends BaseError {
  constructor(
    message,
    name = "Bad Request",
    statusCode = StatusCode.Bad_Request
  ) {
    super(name, statusCode, message);
  }
}
