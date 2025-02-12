import { Router } from 'express';
import {
  createCourseController,
  getAllCoursesController,
} from './course.controller';

const CourseRouter = Router();

CourseRouter.post('/', createCourseController);
CourseRouter.get('/', getAllCoursesController);

export default CourseRouter;
