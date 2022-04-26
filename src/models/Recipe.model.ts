import { Schema, model } from 'mongoose';

// ______________Reciepe interface__________________________________
export interface Recipes {
  title: string;
  ingredient: string[];
  recipes: string;
  image: string;
}

// ______________Reciepe Schema ________________________________
const recipeSchema = new Schema<Recipes>({
  title: { type: String, required: true },
  ingredient: [{ type: String, required: true }],
  recipes: { type: String, required: true },
  image: { type: String, required: true }
});

export const ReciepeModel = model<Recipes>('recipes', recipeSchema);
