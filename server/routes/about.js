/**
 * About Routes
 * GET  /api/about        — public
 * POST /api/about        — admin only
 * PUT  /api/about/:id    — admin only
 */

const router  = require('express').Router();
const auth    = require('../middleware/auth');
const About   = require('../models/About');

router.get('/', async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const existing = await About.findOne();
    if (existing) return res.status(400).json({ message: 'About entry already exists. Use PUT to update.' });
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
