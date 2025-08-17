const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MyBook = require('../models/MyBook');

router.get('/', auth, async (req, res) => {
  try {
    const myBooks = await MyBook.find({ userId: req.user.id }).populate('bookId');
    res.json(myBooks);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:bookId', auth, async (req, res) => {
  try {
    const exists = await MyBook.findOne({ userId: req.user.id, bookId: req.params.bookId });
    if (exists) return res.status(400).json({ message: 'Book already added' });

    const newEntry = new MyBook({ userId: req.user.id, bookId: req.params.bookId });
    await newEntry.save();
    res.status(201).json({ message: 'Book added' });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:bookId/status', auth, async (req, res) => {
  const { status } = req.body;
  if (!['Want to Read', 'Currently Reading', 'Read'].includes(status))
    return res.status(400).json({ message: 'Invalid status' });

  try {
    const myBook = await MyBook.findOne({ userId: req.user.id, bookId: req.params.bookId });
    if (!myBook) return res.status(404).json({ message: 'Book not found in your list' });

    myBook.status = status;
    await myBook.save();
    res.json({ message: 'Status updated' });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:bookId/rating', auth, async (req, res) => {
  const { rating } = req.body;
  if (!rating || rating < 1 || rating > 5)
    return res.status(400).json({ message: 'Rating must be 1-5' });

  try {
    const myBook = await MyBook.findOne({ userId: req.user.id, bookId: req.params.bookId });
    if (!myBook) return res.status(404).json({ message: 'Book not found in your list' });

    myBook.rating = rating;
    await myBook.save();
    res.json({ message: 'Rating updated' });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
