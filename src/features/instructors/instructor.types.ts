import { ICourse } from '@features/courses/course.types';

export interface IInstructor {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  image?: string;
  job_position?: string;
  bio?: string;
  courses?: ICourse[];
}
