import { config } from 'dotenv';
config();

const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI?.toString();
if (!MONGODB_URI) {
  console.error(
    `MONGODB URI is undefinded please set the MONGODB_URI environment variable`
  );
  process.exit(1);
}

export { PORT, MONGODB_URI };
