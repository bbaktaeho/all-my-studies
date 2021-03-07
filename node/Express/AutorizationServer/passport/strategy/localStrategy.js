const { getConn } = require('../../config/database/db.pool');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

function localStrategy() {
  return new LocalStrategy(
    // 클라이언트에서 받아올 값의 키 값을 설정
    { usernameField: 'email', passwordField: 'password', session: true, passReqToCallback: true },
    // 로컬로그인 시 처리되는 함수
    async (req, email, password, done) => {
      console.log('localStrategy 함수 실행');
      let conn;
      try {
        conn = await getConn();
        const [[user]] = await conn.query('select * from user where email=?', [email]);
        if (!user) {
          done(null, false, { message: '존재하지 않는 이메일' });
        } else if (!(await bcrypt.compare(password, user.password))) {
          done(null, false, { message: '비밀번호가 틀립니다' });
        } else done(null, user);
        conn.release();
      } catch (err) {
        if (conn) conn.release();
        console.error(err);
        done(err);
      }
    }
  );
}

module.exports = localStrategy;
