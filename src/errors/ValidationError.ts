import { Result, ValidationError as EValidationError } from 'express-validator';
import { AbstractCustomError } from './AbstractCustomError';

class ValidationError extends AbstractCustomError {
  statusCode = 400;
  private errorResult: Result<EValidationError>;

  constructor(errorResult: Result<EValidationError>, message: string = 'Validation Error') {
    super(message);
    this.errorResult = errorResult;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  toJson() {
    return this.errorResult.array().map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}

export {
  ValidationError
}