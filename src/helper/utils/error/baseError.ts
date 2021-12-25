import { StatusCode } from "./httpStatusCodes";

export class BaseError extends Error {
  public readonly name: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  // public readonly stacks?: string;

  constructor(
    name: string,
    statusCode: StatusCode,
    message: string,
    isOperational?: boolean
  ) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational || true;
    // this.stacks = this.stack;
    Error.captureStackTrace(this);
  }
}
