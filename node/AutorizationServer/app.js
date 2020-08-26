const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const passport = require('passport');
const morgan = require('morgan');
const passportConfig = require('./passport');
const authRouter = require('./api/routes/auth.router');
const userRouter = require('./api/routes/user.router');

// express 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser('secretKey')); // 1
app.use( // 2
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    store: new fileStore({}),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// 라우터
app.get('/', (req, res, next) => {
  res.send('홈페이지');
});
app.use('/auth', authRouter);
app.use('/user', userRouter);

// 에러 헨들링
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(9000, () => {
  console.log('server start');
});
