const http = require('http');
const handleBlogRouter = require('./routes/blog');

const app = http.createServer(handleBlogRouter);

module.exports = app;
