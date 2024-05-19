const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// Route to get all tweets
router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 });
    res.json(tweets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new tweet
router.post('/', async (req, res) => {
  const tweet = new Tweet({
    text: req.body.text
  });
  try {
    const newTweet = await tweet.save();
    res.status(201).json(newTweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;