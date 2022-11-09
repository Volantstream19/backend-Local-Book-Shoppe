const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router().get('/', async (req, res) => {
  const AllAuthors = await Author.getAllAuthors();
  res.json(AllAuthors);
});
