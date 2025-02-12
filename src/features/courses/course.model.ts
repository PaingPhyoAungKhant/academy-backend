import mongoose, { Schema } from 'mongoose';
import { ICourse } from '@features/courses/course.types';
import { formatToJson } from '@utils/helper';

const CourseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    level: {
      type: String,
      enum: ['beginner', ' intermediate', 'advanced'],
      required: true,
      default: 'beginner',
    },
    price: { type: Number, required: true },
    modes: [
      {
        type: { type: String, enum: ['online', 'on-campus'], required: true },
        details: {
          platform: { type: String },
          location: { type: String },
          timetable: { type: String },
        },
      },
    ],
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    duration: { type: Number, required: true },
    enrollment_count: { type: Number, default: 0 },
    ratings: { type: Number, default: 0 },
    overview: { type: String, required: true },
    learnings: [{ type: String }],
    modules: [
      {
        module_title: { type: String, required: true },
        module_description: { type: String },
        module_order: { type: Number, default: 0 },
        contents: [
          {
            content_title: { type: String },
            content_order: { type: Number, default: 0 },
          },
        ],
      },
    ],
    reviews: [{ type: mongoose.Schema.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
  }
);

formatToJson(CourseSchema);
export const Course = mongoose.model<ICourse>('Course', CourseSchema);
