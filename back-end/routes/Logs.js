// server/routes/logs.js
const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// Лог бүртгэх
router.post('/', async (req, res) => {
  try {
    const { message, userId } = req.body;
    const log = new Log({ message, userId });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: 'Лог хадгалахад алдаа' });
  }
});

// Лог унших (он сараар шүүлттэй)
router.get('/', async (req, res) => {
  const { userId, year, month } = req.query;

  const startDate = new Date(`${year}-${month}-01`);
  const endDate = new Date(`${year}-${parseInt(month)+1}-01`);

  try {
    const logs = await Log.find({
      userId,
      createdAt: { $gte: startDate, $lt: endDate }
    }).sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Лог уншихад алдаа' });
  }
});

module.exports = router;
