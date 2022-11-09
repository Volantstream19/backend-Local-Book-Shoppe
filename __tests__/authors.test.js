const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { authors } = require('../lib/author-data');
const { Author } = require('../lib/models/Author.js');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    const expected = authors.map((author) => {
      return { id: author.id, name: author.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/authors/:id route returns author detail with books', async () => {
    const res = await request(app).get('/authors/1');
    const exp = await Author.getSingleAuthor('1');
    expect(res.body).toEqual(exp);
  });
});

afterAll(() => {
  pool.end();
});
