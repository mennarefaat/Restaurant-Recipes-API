import { Schema, model } from 'mongoose';

// ______________Reciepe interface__________________________________
export interface Recipes {
  title: string;
  ingredients: string[]|string;
  recipe: string;
  image: string;
}

// ______________Reciepe Schema ________________________________
const recipeSchema = new Schema<Recipes>({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  recipe: { type: String, required: true },
  image: { type: String, required: true }
});

export const ReciepeModel = model<Recipes>('recipes', recipeSchema);
