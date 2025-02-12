export class CustomError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const Error404 = (subject: string) =>
  new CustomError(`${subject} not found.`, 404);

export interface ICustomError extends Error {
  status?: number;
  details?: string | Record<string, unknown>;
}
