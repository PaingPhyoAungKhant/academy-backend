import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { requestLogger, errorHandler } from '@middlewares/index';

import CourseRouter from '@features/courses/course.routes';
import CategoryRouter from '@features/categories/category.routes';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

// Course Routes
app.use('/api/courses', CourseRouter);

//Category Routes
app.use('/api/categories', CategoryRouter);

app.use(errorHandler);
export default app;
