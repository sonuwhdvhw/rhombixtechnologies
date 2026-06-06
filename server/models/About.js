const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  title:      { type: String, required: true },
  bio:        { type: String, required: true },
  location:   { type: String },
  email:      { type: String },
  phone:      { type: String },
  whatsapp:   { type: String },
  github:     { type: String },
  linkedin:   { type: String },
  twitter:    { type: String },
  website:    { type: String },
  roles:      [{ type: String }],   // animated role titles
  goals:      { type: String },
  avatarUrl:  { type: String },
}, { timestamps: true });

module.exports = mongoose.model('About', aboutSchema);
