const handleBlogRouter = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  const method = req.method;
  const url = req.url;
  if (method === 'GET' && url === '/api/blog/list') {
    res.end('我是博客列表接口');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 not found');
  res.end();
};

module.exports = handleBlogRouter;
