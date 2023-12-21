const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, PhotoAlbum } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');

// аутентицикация существующего пользователя
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({
        where: { email },
        include: { model: PhotoAlbum },
      });
      if (user && (await bcrypt.compare(password, user.password))) {
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            avatar: user.avatar,
            isAdmin: user.isAdmin,
            PhotoAlbums: user.PhotoAlbums,
          },
        });
        res
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .status(200)
          .json({
            message: 'ok',
            user: {
              name: user.name,
              avatar: user.avatar,
              id: user.id,
              isAdmin: user.isAdmin,
              email: user.email,
              PhotoAlbums: user.PhotoAlbums,
            },
          });
      } else {
        res
          .status(400)
          .json({ message: 'Ваша почта или пароль не соответствуют' });
      }
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
});

// создание нового пользователя
router.post('/registration', async (req, res) => {
  const { email, password, name } = req.body;

  if (name === '' || email === '' || password === '') {
    return res
      .status(400)
      .json({ success: false, message: 'Заполните все поля' });
  }

  try {
    // если пользователь с таким login уже есть, возвращаем ошибку
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Такая почта уже зарегистрированна' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hash,
      });

      const { accessToken, refreshToken } = generateTokens({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });

      res.cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      });
      res.cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      });

      return res.status(201).json({
        message: 'ok',
        user: {
          name,
          id: user.id,
          email,
          avatar: user.avatar,
          isAdmin: user.isAdmin,
          PhotoAlbums: [],
        },
      });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// при логауте чистим все куки
router.get('/logout', (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie(cookiesConfig.access).clearCookie(cookiesConfig.refresh);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// проверка активной сессии и отправка информации о пользователе
router.get('/check', async (req, res) => {
  const { user } = res.locals; // ищем активную сессию
  if (user) {
    const userData = await User.findOne({
      where: { email: user.email },
      include: { model: PhotoAlbum },
    });
    delete userData.password; //  чтобы не отправлять пароль на клиент
    res.status(200).json({
      isLoggedIn: true,
      user: userData,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

module.exports = router;
