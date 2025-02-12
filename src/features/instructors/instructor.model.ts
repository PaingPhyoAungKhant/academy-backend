import mongoose, { Schema } from 'mongoose';
import { IInstructor } from './instructor.types';
import { formatToJson } from '@utils/helper';

const InstructorSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    job_position: { type: String, required: true },
    bio: { type: String },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  },
  {
    timestamps: true,
  }
);

formatToJson(InstructorSchema);

export const Instructor = mongoose.model<IInstructor>(
  'Instructor',
  InstructorSchema
);
