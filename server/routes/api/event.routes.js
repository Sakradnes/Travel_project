const router = require('express').Router();
const { Event } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const allEvents = await Event.findAll({ raw: true });
    res.status(200).json(allEvents);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { name, date, description, locationId } = req.body;
    const newFileUrl = `/img/${req.file.originalname}`;
    const newEvent = await Event.create({
      name,
      date,
      description,
      locationId: +locationId,
      img: newFileUrl,
    });
    console.log(newEvent);
    res.status(200).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put('/', upload.single('img'), async (req, res) => {
  try {
    const { name, date, description, id } = req.body;
    if (req.file) {
      const newFileUrl = `/img/${req.file.originalname}`;
      const updateEvent = await Event.findOne({
        where: { id: id },
      });
      if (updateEvent) {
        updateEvent.name = name;
        updateEvent.date = date;
        updateEvent.description = description;
        updateEvent.img = newFileUrl;
        await updateEvent.save();
        return res.status(200).json(updateEvent);
      }
    }
    const updateEvent = await Event.findOne({
      where: { id: id },
    });
    if (updateEvent) {
      updateEvent.name = name;
      updateEvent.date = date;
      updateEvent.description = description;
      await updateEvent.save();
      return res.status(200).json(updateEvent);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  try {
    const event = await Event.findOne({ where: { id: id } });
    if (event) {
      const respons = await Event.destroy({
        where: { id: id },
      });
      if (respons) {
        res.status(200).json(id);
      } else {
        res.status(400).json({ message: 'Произошла ошибка при удалении' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
