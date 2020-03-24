const redis = require('redis');
const { REDIS_CONFIG } = require('../config/db');

const redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host);
redisClient.on('error', err => {
  console.error(error);
});

const set = (key, val) => {
  redisClient.set(key, val.toString(), redis.print);
};

const get = key => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val === null) {
        resolve(null);
        return;
      }

      // 兼容 JSON
      try {
        resolve(JSON.parse(val));
      } catch (error) {
        resolve(val);
      }
    });
  });
};

module.exports = {
  get,
  set
};
