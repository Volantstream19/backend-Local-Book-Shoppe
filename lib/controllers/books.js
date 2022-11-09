const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router().get('/', async (req, res) => {
  const allBooks = await Book.getAll();
  res.json(allBooks);
});
