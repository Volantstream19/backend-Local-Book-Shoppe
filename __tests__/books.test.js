const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { bookData } = require('../lib/book-data.js');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    const exp = bookData.map((book) => {
      return { id: book.id, title: book.title, released: book.released };
    });
    expect(res.body).toEqual(exp);
  });

  afterAll(() => {
    pool.end();
  });
});
