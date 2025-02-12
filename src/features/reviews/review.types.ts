import { ObjectId } from 'mongoose';

export interface Review {
  user: ObjectId;
  rating: number;
  comment: string;
  date: Date;
}
