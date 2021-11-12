import { AbstractCustomError } from './AbstractCustomError'; 

class NotFoundError extends AbstractCustomError {
  statusCode = 404;

  constructor(message: string = 'Resource not found!') {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
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
  NotFoundError
}