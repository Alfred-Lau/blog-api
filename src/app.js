const http = require('http');
const handleBlogRouter = require('./routes/blog');
const handleUserHandler = require('./routes/user');

const handler = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  /* core */

  let blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(blogData);
    return;
  }

  let userData = handleUserHandler(req, res);
  if (userData) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    res.end(JSON.stringify(userData));
    return;
  }

  // 穿透 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 not found');
  res.end();
};

const app = http.createServer(handler);

module.exports = app;
