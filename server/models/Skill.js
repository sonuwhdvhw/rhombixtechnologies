const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  category: { type: String, enum: ['technical', 'soft'], required: true },
  level:    { type: Number, min: 1, max: 100 },   // optional proficiency %
  icon:     { type: String },                      // icon class name
  order:    { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
