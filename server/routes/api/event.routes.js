const router = require('express').Router();
const { Event } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allEvents = await Event.findAll({ raw: true });
    res.status(200).json(allEvents);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
