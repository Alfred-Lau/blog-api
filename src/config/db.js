const isDev = process.env.NODE_ENV === 'development' ? true : false;

const MYSQL_CONFIG = {
  host: isDev ? 'localhost' : '',
  user: 'root',
  password: 'liujian10086',
  port: '3306',
  database: 'blog-api'
};

const REDIS_CONFIG = {
  host: isDev ? 'localhost' : '',
  port: 6379
};

module.exports = { MYSQL_CONFIG, REDIS_CONFIG };
