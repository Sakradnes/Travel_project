const router = require('express').Router();
const { Route, Way } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const routesMaps = await Route.findAll({
      include: [{ model: Way }],
    });
    console.log(routesMaps);
    res.status(200).json(routesMaps);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
