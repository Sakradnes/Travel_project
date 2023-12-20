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

module.exports = router;
