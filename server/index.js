/**
 * Portfolio Backend - Express Server
 * Entry point for the API
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// ── Database Connection ─────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/about',        require('./routes/about'));
app.use('/api/background',   require('./routes/background'));
app.use('/api/projects',     require('./routes/projects'));
app.use('/api/skills',       require('./routes/skills'));
app.use('/api/experience',   require('./routes/experience'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/blog',         require('./routes/blog'));
app.use('/api/achievements', require('./routes/achievements'));
app.use('/api/contact',      require('./routes/contact'));

// ── Health check ────────────────────────────────────────────────────────────
app.get('/', (req, res) => res.json({ status: 'Portfolio API running 🚀' }));

// ── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
