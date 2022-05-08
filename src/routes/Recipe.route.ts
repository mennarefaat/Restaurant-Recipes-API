import { RecipeController } from './../controllers/Recipe.controller';

import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import RecipeValidator from '../validation/RecipeRouter.validate';

const recipeController = new RecipeController();
const recipeValidation = new RecipeValidator();

export class RecipeRouter implements IRouterCustom {
  getRouter(): IRouter {
    const recipeRouter = express.Router();

    recipeRouter
      .route('/recipes')
      .get(recipeController.getAll)
      .post(recipeValidation.post, recipeController.post);

    recipeRouter
      .route('/recipes/:id')
      .get(recipeValidation.getOneOrDelete, recipeController.getOne)
      .put(recipeController.put)
      .delete(
        recipeValidation.getOneOrDelete,
        recipeController.delete
      );

    return recipeRouter;
  }
}
