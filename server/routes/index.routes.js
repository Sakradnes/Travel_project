const router = require('express').Router();

const authRouter = require('./api/auth.routes');

router.use('/api/auth', authRouter);

// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

module.exports = router;
