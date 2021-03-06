const router = require('express').Router();
const { Book } = require('../models');


router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll()
    res.status(200).json(books)
  } catch (error) {
    console.log(error)
  }
});

router.post('/register', async (req, res, next) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const book = Book.create({
      title,
      author,
      pageQuantity,
    })
    res.status(200).json(book)
  } catch (error) {
    console.log(error)
  }
});



module.exports = router;
