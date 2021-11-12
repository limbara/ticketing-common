import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';
import { ValidationError } from '../errors/ValidationError';

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return next(new ValidationError(errors));
  }
}

const validateSignup = validate([
  body('email').isEmail().withMessage('Email must be valid!'),
  body('password').trim().isLength({
    min: 4,
    max: 20
  }).withMessage('Password must be between 4 & 20 characters!')
])

const validateSignin = validate([
  body('email').isEmail().withMessage('Email must be valid!'),
  body('password').trim().notEmpty().withMessage('Password required!')
])

export {
  validate,
  validateSignup,
  validateSignin
}