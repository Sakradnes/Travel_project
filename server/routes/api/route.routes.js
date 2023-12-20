const router = require('express').Router();
const { Route } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const routesMaps = await Route.findAll({ raw: true });
    res.status(200).json(routesMaps);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
