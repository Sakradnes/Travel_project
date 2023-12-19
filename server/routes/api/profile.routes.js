const router = require("express").Router();
const { User, PhotoAlbum } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: 1 },
      include: [{ model: PhotoAlbum }],
      raw: true,
    });
    console.log("user", user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
