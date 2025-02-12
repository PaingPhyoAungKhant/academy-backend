import mongoose, { Schema } from 'mongoose';
import { ICategory } from '@features/categories/category.types';
import { formatToJson } from '@utils/helper';

const CategorySchema: Schema = new Schema({
  category_name: { type: String, required: true },
  category_image: { type: String },
});

formatToJson(CategorySchema);
export const Category = mongoose.model<ICategory>('Category', CategorySchema);
