const router = require("express").Router();
const { User, PhotoAlbum } = require("../../db/models");
const fileUpload = require("../../utils/fileuploadMiddeleware");

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
    const { name } = req.body;
    const file = req.files?.url;
    if (name) {
      if (file.length) {
        const arrUrl = await Promise.all(file.map((el) => fileUpload(el)));

        const arrPhoto = await Promise.all(
          arrUrl.map((el) =>
            PhotoAlbum.create({
              name,
              img: el,
              userId: res.locals.user.id,
            })
          )
        );

        res.status(201).json(arrPhoto);
      } else {
        const oneUrl = await fileUpload(file);
        const onePhoto = await PhotoAlbum.create({
          name,
          img: oneUrl,
          userId: res.locals.user.id,
        });

        res.status(201).json([onePhoto]);
      }
    } else {
      res.status(400).json({ message: "Заполните все поля" });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});

router.delete("/:photoId", async (req, res) => {
  try {
    const { photoId } = req.params;
    const deletedPhoto = await PhotoAlbum.findOne({ where: { id: photoId } });
    if (deletedPhoto) {
      const result = await PhotoAlbum.destroy({ where: { id: photoId } });
      if (result) {
        res.status(201).json(photoId);
      } else {
        res.status(400).json({ message: "Фото не найдено" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/edit", async (req, res) => {
  try {
    const { name, id } = req.body;
    const file = req.files?.avatar;
    if (file) {
      const updateUser = await User.findOne({
        where: { id },
        include: PhotoAlbum,
      });

      if (updateUser) {
        const oneUrl = await fileUpload(file);
        updateUser.name = name;
        updateUser.avatar = oneUrl;
        await updateUser.save();
        res.status(200).json(updateUser);
      } else {
        res.status(400).json({ message: "Пользователь не найден" });
      }
    } else {
      const updateUser = await User.findOne({
        where: { id },
        include: PhotoAlbum,
      });
      if (updateUser) {
        updateUser.name = name;
        await updateUser.save();
        res.status(200).json(updateUser);
      } else {
        res.status(400).json({ message: "Пользователь не найден" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
