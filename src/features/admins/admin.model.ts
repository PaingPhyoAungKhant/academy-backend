import mongoose, { Schema } from 'mongoose';

import { IAdmin } from './admin.types';

const AdminSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      min_length: 3,
      max_length: 50,
    },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minLength: 6, select: false },
    role: {
      type: String,
      required: true,
      enum: ['superadmin', 'admin', 'moderator'],
      default: 'admin',
    },
    profile: {
      name: { type: String },
      image: { type: String },
    },
  },
  {
    timestamps: true,
  }
);
