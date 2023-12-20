const router = require('express').Router();
const { Routes } = require('../../db/models');

router.get('/routes', async (req, res) => {
  try {
    const routesMaps = await Routes.findAll({ raw: true });
    console.log(routesMaps);
    res.status(200).json(routesMaps);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
