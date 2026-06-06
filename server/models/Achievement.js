const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  issuingBody: { type: String },
  year:        { type: String },
  description: { type: String },
  icon:        { type: String },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);
