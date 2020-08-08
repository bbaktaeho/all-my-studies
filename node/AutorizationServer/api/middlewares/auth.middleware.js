const passport = require('passport');

const loginProcess = (req, res, next) =>
  passport.authenticate('local', { session: true }, (err, user, info) => {
    console.log('passport.authenticate 실행');
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) return res.status(403).json({ success: false, message: info.message });
    // passport 가 만들어준 녀석
    req.login(user, (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      res.status(201).json({ success: true, message: '로그인 성공' });
    });
  })(req, res, next);

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.status(403).json({ success: false, message: '로그인 필요' });
};

const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) next();
  else res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
};

module.exports = {
  loginProcess,
  isLoggedIn,
  isNotLoggedIn,
};
