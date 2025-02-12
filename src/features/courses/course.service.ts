import { Course } from './course.model';
import { ICourse } from './course.types';

/**
 * Create Course
 *
 */
export const createCourse = async (courseData: ICourse): Promise<ICourse> =>
  new Course(courseData).save();

/**
 * Get All course
 *
 */
export const getAllCourses = async (): Promise<ICourse[]> =>
  Course.find()
    .select(
      'title description image, level, price, modes, ratings, enrollment_count'
    )
    .exec();

/**
 *
 * Get Course By ID
 */
export const getCourseById = async (
  courseId: string
): Promise<ICourse | null> =>
  Course.findById(courseId).populate('categories instructor reviews').exec();
