import { Recipes } from '../models/Recipe.model';
import { RecipeRepo } from './../repositories/Recipe.repo';
import { BaseService } from './Base.service';

export class RecipeService extends BaseService<Recipes> {
  _repoObj: RecipeRepo = new RecipeRepo();
}
