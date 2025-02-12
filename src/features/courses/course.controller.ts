import { Request, Response } from 'express';
import { createCourse, getAllCourses } from './course.service';
import { ICourse } from './course.types';
import { send_json_response } from '@utils/response-formater';
import { CustomError } from '@utils/custom-error';

export const createCourseController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const courseData: ICourse = req.body;
  const newCourse = await createCourse(courseData);
  send_json_response(res, 201, 'course created successfully', newCourse);
};

export const getAllCoursesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const courses: ICourse[] = await getAllCourses();
  if (courses.length === 0) throw new CustomError('No Courses Found', 404);
  send_json_response(res, 201, 'Courses Fetched Successfully', courses);
};
