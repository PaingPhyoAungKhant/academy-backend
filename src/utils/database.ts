import mongoose from 'mongoose';

export const connectDatabase = async (mongodb_uri: string) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongodb_uri);
    console.log(`Connected to Mongodb`);
  } catch (error) {
    console.error(`Error: Connecting to mongodb: ${error}`);
    process.exit(1);
  }
};
