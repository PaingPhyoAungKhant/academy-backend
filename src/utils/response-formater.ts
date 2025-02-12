import { Response } from 'express';

const formatResponse = (status: number, message: string, data: unknown) => ({
  success: status < 400,
  message,
  data,
});

export const send_json_response = (
  res: Response,
  status: number,
  message: string,
  data: unknown
) => {
  res.status(status).json(formatResponse(status, message, data));
};
