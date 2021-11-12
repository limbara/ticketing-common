import { Request, Response, NextFunction } from 'express';
import { AbstractCustomError } from '../errors/AbstractCustomError';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof AbstractCustomError) {
    return res.status(err.statusCode).json({ errors: err.toJson() });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      errors: [
        {
          message: `Something went wrong! ${err.message}`,
        }
      ]
    });
  }

  return res.status(500).json({
    errors: [
      {
        message: `Something went wrong!`,
      }
    ]
  });
}

export {
  globalErrorHandler
}