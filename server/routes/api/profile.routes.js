const router = require("express").Router();
const { User, PhotoAlbum } = require("../../db/models");

router.get("/", async (req, res) => {
  const user = await User.findOne({
    where: { id: 1, },
    raw: true,
  });
  console.log(user);
  res.json(user);
});

module.exports = router;
