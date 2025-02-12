/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { logger } from '@utils/logger';
import morgan from 'morgan';
import { send_json_response } from '@utils/response-formater';
import { ICustomError } from '@utils/custom-error';

export const errorHandler = (
  err: ICustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Error: ${err.message}`);
  if (err.stack) logger.error(err.stack);

  // Narrow the type for CustomError
  if (err.status) {
    send_json_response(res, err.status, err.message, {
      error: err.message,
      details: err.details || null,
    });
    return;
  }

  // Handle Mongoose errors
  if (err instanceof Error) {
    switch (err.name) {
      case 'CastError':
        send_json_response(res, 400, 'Cast Error', {
          error: 'Malformatted ID',
          detail: err,
        });
        break;

      case 'ValidationError':
        send_json_response(res, 400, 'Validation Error', {
          error: err.message,
          detail: err,
        });
        break;

      default:
        break;
    }
  }

  // Fallback for unexpected errors
  send_json_response(res, 500, 'Internal Server Error', {
    error: 'Internal Server Error',
    detail: err,
  });
};
