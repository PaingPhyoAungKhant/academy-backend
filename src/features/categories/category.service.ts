import { ICategory } from './category.types';
import { Category } from './category.model';
import { Error404 } from '@utils/custom-error';

export const createCategory = async (
  categoryData: ICategory
): Promise<ICategory> => new Category(categoryData).save();

export const getAllCategories = async (): Promise<ICategory[]> =>
  Category.find().exec();

export const updateCategory = async (
  categoryId: string,
  newCategoryData: ICategory
): Promise<ICategory> => {
  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    newCategoryData,
    { new: true }
  );
  if (!updatedCategory) throw Error404('Category');
  return updatedCategory;
};

export const deleteCategory = async (categoryId: string): Promise<boolean> => {
  const category = await Category.findByIdAndDelete(categoryId);
  if (!category) throw Error404('Category');
  return true;
};
