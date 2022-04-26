import { Reciepes, ReciepeModel } from './../models/Reciepe.model';
import { BaseRepo } from './Base.repo';

export class ProductRepo extends BaseRepo<Reciepes> {
    _collectionName: string = 'products';
    _model: Object = ReciepeModel;
}
