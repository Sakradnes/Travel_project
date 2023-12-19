const { route } = require('./profile.routes');

const { Routes } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  const ways = await Routes.findAll({
    include: [name, img, path, description],
  });
  res.json(ways);
});

module.exports = router;
