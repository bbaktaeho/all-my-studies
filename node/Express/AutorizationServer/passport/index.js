const passport = require('passport');
const { getConn } = require('../config/database/db.pool');
const localStrategy = require('./strategy/localStrategy');

function passportConfig() {
  // 로그인 할 때 세션을 만들고 기록하는 메서드
  passport.serializeUser((user, done) => {
    console.log('serializeUser 실행');
    done(null, user.id);
  });

  // 인증이 필요한 모든 api 요청에서 동작하는 메서드
  // req.user 를 만들어냄
  passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser 실행');
    let conn;
    try {
      conn = await getConn();
      const [[user]] = await conn.query('select * from user where id=?', [id]);
      if (user) {
        conn.release();
        return done(null, user);
      }
    } catch (err) {
      if (conn) conn.release();
      console.error(err);
      done(err);
    }
  });

  // 인증 전략
  passport.use(localStrategy());
}

module.exports = passportConfig;
