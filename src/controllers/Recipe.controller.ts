import { RecipeService } from './../services/Recipe.service';
import { Recipes } from '../models/Recipe.model';
import { BaseController } from './Base.controller';

export class RecipeController extends BaseController<Recipes> {
    _serviceObj: RecipeService = new RecipeService();
}
