const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  message: String,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);
