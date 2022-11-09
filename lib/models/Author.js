const pool = require('../utils/pool');

class Author {
  id;
  name;
  books;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.books = row.books;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query('SELECT * from authors');
    return rows.map((authorRow) => new Author(authorRow));
  }
}
module.exports = { Author };
