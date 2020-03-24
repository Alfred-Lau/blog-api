const http = require('http');
const querystring = require('querystring');

// const { get, set } = require('./db/redis');

const handleBlogRouter = require('./routes/blog');
const handleUserHandler = require('./routes/user');

// 解析 SESSION

// 设置 cookie 过期时间

// setCookie

const getPostData = req => {
  return new Promise(resolve => {
    // TODO：必须设置默认值，否则合成的 postData 不正确！！！
    let postData = '';

    if (req.method !== 'POST') {
      resolve();
      // resolve 之后还是会执行的
      return;
    }

    if (req.headers['content-type' !== 'application/json']) {
      resolve();
      return;
    }
    req.on('data', chunk => {
      postData += chunk;
    });

    req.on('end', () => {
      if (!postData) {
        resolve();
        return;
      }

      resolve(JSON.parse(postData));
    });
  });
};

const handler = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  /* core */

  // 解析 query,挂到 req 上面
  req.query = querystring.parse(req.url.split('?')[1]);
  req.path = req.url.split('?')[0];

  // 处理挂载 cookie

  // 处理 Session

  getPostData(req).then(async postData => {
    req.body = postData;

    let blogData = await handleBlogRouter(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }

    let userData = await handleUserHandler(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    // 穿透 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 not found');
    res.end();
  });
};

const app = http.createServer(handler);

module.exports = app;
