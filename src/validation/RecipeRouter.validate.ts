import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import IRouterValidator from './validator.interface';

export default class RecipeValidator implements IRouterValidator {
  async getOneOrDelete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      id: Joi.string().length(24).required()
    });

    try {
      await schema.validateAsync({ id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }

  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      title: Joi.string().min(3).max(30).required(),
      image: Joi.string().required(),
      recipe: Joi.string().required(),
      ingredients: Joi.array().required()
    });
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }

  async put(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      id: Joi.string().length(24).required(),
      image: Joi.string().required(),
      recipe: Joi.string().required(),
      ingredients: Joi.array().required()
    });
    try {
      await schema.validateAsync({ ...req.body, id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
