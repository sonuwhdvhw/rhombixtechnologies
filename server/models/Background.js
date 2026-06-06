const mongoose = require('mongoose');

const backgroundSchema = new mongoose.Schema({
  type:        { type: String, enum: ['education', 'certification'], required: true },
  institution: { type: String, required: true },
  degree:      { type: String, required: true },   // degree title or cert name
  year:        { type: String, required: true },
  description: { type: String },
  issuingBody: { type: String },                   // for certifications
  credentialUrl: { type: String },                 // for certifications
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Background', backgroundSchema);
