import app from './app';
import { PORT, MONGODB_URI } from '@utils/config';
import { connectDatabase } from '@utils/database';

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined');
  process.exit(1);
}

connectDatabase(MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
