const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/register',
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.post('/login',
  body('email').isEmail(),
  body('password').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

      const cookieOptions = {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      };

      res.cookie('token', token, cookieOptions);
      res.json({ message: 'Logged in successfully', email: user.email });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

router.get('/me', (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ email: decoded.email, id: decoded.id });
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
