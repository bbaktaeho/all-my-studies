const bcrypt = require('bcrypt');
const { getConn } = require('../../config/database/db.pool');

module.exports = {
  register: async (req, res, next) => {
    const { email, password, name } = req.body;
    let conn;
    try {
      conn = await getConn();
      const [row] = await conn.query('select email from user where email=?', [email]);
      if (row.length != 0) {
        conn.release();
        return res.status(409).json({ success: false, message: '이미 있는 계정' });
      }
      const salt = await bcrypt.genSalt(11);
      const hashPassword = await bcrypt.hash(password, salt);
      await conn.execute('insert into user(email, password, name) values(?, ?, ?)', [email, hashPassword, name]);
      conn.release();
      res.status(201).json({ success: true, message: '가입 성공' });
    } catch (err) {
      if (conn) conn.release();
      console.error(err);
      next(err);
    }
  },
};
