import { AbstractCustomError } from './AbstractCustomError';

class BadRequestError extends AbstractCustomError {
  statusCode = 400;

  constructor(message: string = 'Bad Request Error') {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  toJson() {
    return [
      {
        message: this.message
      }
    ];
  }
}

export {
  BadRequestError
}