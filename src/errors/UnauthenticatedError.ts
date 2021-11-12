import { AbstractCustomError } from './AbstractCustomError';

class UnauthenticatedError extends AbstractCustomError {
  statusCode = 401;

  constructor(message: string = 'Unauthorized Error') {
    super(message);

    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
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
  UnauthenticatedError
}