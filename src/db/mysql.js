const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config/db');

const con = mysql.createConnection(MYSQL_CONFIG);
con.connect();

const execPromise = sql => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
    });
  });
};

module.exports = {
  execPromise
};
