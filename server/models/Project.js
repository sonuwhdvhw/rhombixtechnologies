const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  role:        { type: String },
  techStack:   [{ type: String }],
  outcomes:    { type: String },
  githubUrl:   { type: String },
  liveUrl:     { type: String },
  imageUrl:    { type: String },
  featured:    { type: Boolean, default: false },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
