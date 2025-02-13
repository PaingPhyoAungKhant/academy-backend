import { Request, Response } from 'express';

import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from './category.service';
import { ICategory } from './category.types';
import { send_json_response } from '@utils/response-formater';

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryData: ICategory = req.body;
  const newCategory: ICategory = await createCategory(categoryData);
  send_json_response(res, 201, 'Category Created Successfully', newCategory);
};

export const getAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categories: ICategory[] = await getAllCategories();
  send_json_response(res, 200, 'Category Fetched Successfully', categories);
};

export const updateCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId = req.params.id;
  const updatedCategoryData: ICategory = req.body;
  const updatedCategory = await updateCategory(categoryId, updatedCategoryData);
  send_json_response(res, 200, 'Course Updated Successfully', updatedCategory);
};

export const deleteCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId = req.params.id;
  await deleteCategory(categoryId);
  send_json_response(res, 200, 'Category Deleted Successfully', {
    id: categoryId,
  });
};
