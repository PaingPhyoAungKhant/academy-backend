import { Error404 } from '@utils/custom-error';
import { Instructor } from './instructor.model';
import { IInstructor } from './instructor.types';

export const createInstructor = async (
  instructorData: IInstructor
): Promise<IInstructor> => new Instructor(instructorData).save();

export const getAllInstructor = async (): Promise<IInstructor[]> =>
  Instructor.find().exec();

export const getInstructorById = async (
  instructorId: string
): Promise<IInstructor> => {
  const instructor = await Instructor.findById(instructorId);
  if (!instructor) throw Error404('Instructor');
  return instructor;
};

export const updateInstructor = async (
  InstructorId: string,
  newInstructorData: IInstructor
): Promise<IInstructor> => {
  const updatedInstructor = await Instructor.findByIdAndUpdate(
    InstructorId,
    newInstructorData
  );
  if (!updatedInstructor) throw Error404('Instructor');
  return updatedInstructor;
};

export const deleteInstructor = async (
  instructorId: string
): Promise<boolean> => {
  const instructor = Instructor.findByIdAndDelete(instructorId);
  if (!instructor) throw Error404('Instructor');
  return true;
};
