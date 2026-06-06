const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  quote:   { type: String, required: true },
  name:    { type: String, required: true },
  title:   { type: String },
  company: { type: String },
  avatar:  { type: String },
  order:   { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
