const router = require("express").Router();
const { Route, Way, Rating } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const routesMaps = await Route.findAll({
      include: [{ model: Way }],
      include: [{ model: Rating }],
    });
    res.status(200).json(routesMaps);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { routeId, rating } = req.body;
    console.log(routeId, rating);
    const newRating = await Rating.create({
      routeId,
      rating: rating,
      userId: res.locals.user.id,
    });
    console.log(newRating, "newRating");
    res.status(200).json(newRating);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
