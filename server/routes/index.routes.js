const router = require('express').Router();

const authRouter = require('./api/auth.routes');
const profileRouter = require('./api/profile.routes');

router.use('/api/auth', authRouter);
router.use('/api/profile', profileRouter);


// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

module.exports = router;
