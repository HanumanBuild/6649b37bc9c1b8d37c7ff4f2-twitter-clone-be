const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// START Import tweet routes
const tweetRoutes = require('./routes/tweets');
// END Import tweet routes

app.use(cors());
app.use(express.json());

// START Use tweet routes
app.use('/posts', tweetRoutes);
// END Use tweet routes

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});