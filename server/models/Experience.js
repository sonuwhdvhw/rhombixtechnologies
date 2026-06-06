const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company:         { type: String, required: true },
  title:           { type: String, required: true },
  type:            { type: String, enum: ['full-time', 'part-time', 'internship', 'freelance', 'contract'] },
  startDate:       { type: String, required: true },
  endDate:         { type: String, default: 'Present' },
  responsibilities: [{ type: String }],
  contributions:   { type: String },
  location:        { type: String },
  order:           { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
