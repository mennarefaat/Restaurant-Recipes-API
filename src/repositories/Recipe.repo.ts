import { Recipes, ReciepeModel } from './../models/Recipe.model';
import { BaseRepo } from './Base.repo';

export class RecipeRepo extends BaseRepo<Recipes> {
    _collectionName: string = 'recipes';
    _model: Object = ReciepeModel;
}
