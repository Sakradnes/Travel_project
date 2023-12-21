const router = require('express').Router();

const authRouter = require('./api/auth.routes');
const profileRouter = require('./api/profile.routes');
const locationsRouter = require('./api/locations.routes');
const eventsRouter = require('./api/event.routes');
const routeRouter = require('./api/route.routes');

router.use('/api/auth', authRouter);
router.use('/api/profile', profileRouter);
router.use('/api/locations', locationsRouter);
router.use('/api/events', eventsRouter);
router.use('/api/routes', routeRouter);


// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

module.exports = router;
