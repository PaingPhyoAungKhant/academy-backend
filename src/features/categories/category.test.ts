import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../app';
import { Category } from './category.model'; // Import your Category model

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // Start an in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  // Disconnect and stop the in-memory MongoDB server
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  // Clear the database before each test
  await Category.deleteMany({});
});

describe('Category API', () => {
  it('should create a new category', async () => {
    const res = await request(app)
      .post('/categories')
      .send({ category_name: 'Test Category', category_image: 'image-url' });

    expect(res.status).toBe(201);
    expect(res.body.category_name).toBe('Test Category');
  });

  it('should get all categories', async () => {
    // Create a category first
    await Category.create({
      category_name: 'Test Category',
      category_image: 'image-url',
    });

    const res = await request(app).get('/categories');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].category_name).toBe('Test Category');
  });

  it('should update a category', async () => {
    // Create a category first
    const category = await Category.create({
      category_name: 'Test Category',
      category_image: 'image-url',
    });

    const res = await request(app)
      .put(`/categories/${category._id}`)
      .send({ category_name: 'Updated Category' });

    expect(res.status).toBe(200);
    expect(res.body.category_name).toBe('Updated Category');
  });

  it('should delete a category', async () => {
    // Create a category first
    const category = await Category.create({
      category_name: 'Test Category',
      category_image: 'image-url',
    });

    const res = await request(app).delete(`/categories/${category._id}`);

    expect(res.status).toBe(200);
    expect(res.body).toBe(true);

    // Verify the category is deleted
    const deletedCategory = await Category.findById(category._id);
    expect(deletedCategory).toBeNull();
  });

  it('should return 404 when updating a non-existent category', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toHexString();

    const res = await request(app)
      .put(`/categories/${nonExistentId}`)
      .send({ category_name: 'Updated Category' });

    expect(res.status).toBe(404);
  });

  it('should return 404 when deleting a non-existent category', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toHexString();

    const res = await request(app).delete(`/categories/${nonExistentId}`);

    expect(res.status).toBe(404);
  });
});
