const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  type: { type: String, enum: ['student', 'instructor'] },
  name: String,
  email: String
});
const testSchema = new mongoose.Schema({
  type: { type: String, enum: ['multiple choice', 'open ended'] },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});
const resultSchema = new mongoose.Schema({
  score: Number,
  feedback: String
});

const User = mongoose.model('User', userSchema);
const Test = mongoose.model('Test', testSchema);
const Result = mongoose.model('Result', resultSchema);

module.exports = { User, Test, Result };