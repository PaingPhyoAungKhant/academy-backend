import { Router } from 'express';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from './category.controller';

const CategoryRouter = Router();

CategoryRouter.post('/', createCategoryController);
CategoryRouter.get('/', getAllCategoriesController);
CategoryRouter.put('/:id', updateCategoryController);
CategoryRouter.delete('/:id', deleteCategoryController);

export default CategoryRouter;
