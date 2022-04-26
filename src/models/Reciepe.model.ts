import { Schema, model } from 'mongoose';

// ______________Reciepe interface__________________________________
export interface Reciepes {
  title: string;
  ingredient: string[];
  reciepes: string;
  image: string;
}

// ______________Reciepe Schema ________________________________
const reciepeSchema = new Schema<Reciepes>({
  title: { type: String, required: true },
  ingredient: [{ type: String, required: true }],
  reciepes: { type: String, required: true },
  image: { type: String, required: true }
});

export const ReciepeModel = model<Reciepes>('reciepes', reciepeSchema);
