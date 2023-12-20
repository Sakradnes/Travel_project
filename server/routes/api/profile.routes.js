const router = require("express").Router();
const { User, PhotoAlbum } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const albums = await PhotoAlbum.findAll({
      where: { userId: res.locals.user.id },
    });
    res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const album = await PhotoAlbum.create({
      name,
      img,
      userId: res.locals.user.id,
    });
    res.status(200).json(album);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
