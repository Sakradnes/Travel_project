const router = require('express').Router();
const { Location } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allLocations = await Location.findAll({ raw: true });
    res.status(200).json(allLocations);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
