const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');

// аутентицикация существующего пользователя
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            namE: user.name,
            lastname: user.lastname,
            avatarId: user.avatarId,
            isAdmin: user.isAdmin,
          },
        });
        console.log(res.locals.user);
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
              avatar: user.avatarId,
              id: user.id,
              isAdmin: user.isAdmin,
              email: user.email,
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
router.post('/register', async (req, res) => {
  const { email, password, name, lastname, idAvatar, description } = req.body;

  if (
    name === '' ||
    email === '' ||
    lastname === '' ||
    idAvatar === '' ||
    description === ''
  ) {
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
        lastname,
        avatarId: idAvatar,
        description,
      });

      const { accessToken, refreshToken } = generateTokens({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          lastname: user.lastname,
          avatarId: user.avatarId,
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
          idAvatar,
          id: user.id,
          email,
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
    res
      .clearCookie(cookiesConfig.access.type)
      .clearCookie(cookiesConfig.refresh.type);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// проверка активной сессии и отправка информации о пользователе
router.get('/check', async (req, res) => {
  const { user } = res.locals; // ищем активную сессию
  console.log(user, '-----');
  const userData = await User.findByPk(user?.id); // ищем пользователя в бд(чтобы подтнуть информацию о его профиле)
  if (user && userData) {
    delete userData.password; //  чтобы не отправлять пароль на клиент
    res.json({
      isLoggedIn: true,
      user: userData,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

module.exports = router;
