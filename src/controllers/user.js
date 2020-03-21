const { execPromise } = require('../db/mysql');

const login = async (username, password) => {
  const sql = `select * from users where username = '${username}' and password = '${password}';`;
  const res = await execPromise(sql);
  console.log('user login',res);
  return res[0] || {};
};

module.exports = {
  login
};
