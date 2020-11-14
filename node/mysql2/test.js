const { getConn } = require('./connection');

const getUsers = async () => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const [rows] = await conn.query('select * from user');
    result = rows;
  } catch (error) {
    console.error(error);
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

const transaction = async () => {
  let conn;
  let result;
  try {
    conn = await getConn();
    await conn.beginTransaction();
    await conn.execute('A 계좌에서 -10000 sql 작성');
    await conn.execute('B 계좌에 +10000 sql 작성');
    await conn.commit();
    result = '거래가 성공했다는 결과를 리턴';
  } catch (error) {
    console.error(error);
    if (conn) conn.rollback();
    return error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};
