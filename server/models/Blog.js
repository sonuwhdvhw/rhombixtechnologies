const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  excerpt:     { type: String, required: true },
  publication: { type: String },
  date:        { type: String },
  url:         { type: String },
  coverImage:  { type: String },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
