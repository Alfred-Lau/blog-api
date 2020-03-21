const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  if (method === 'GET' && url === '/api/blog/list') {
    return '我是博客的列表接口';
  }

  if (method === 'GET' && url === '/api/blog/detail') {
    return '我是博客的详情接口';
  }

  if (method === 'POST' && url === '/api/blog/new') {
    return '我是博客的新增接口';
  }

  if (method === 'DELETE' && url === '/api/blog/del') {
    return '我是博客的删除接口';
  }

  if (method === 'POST' && url === '/api/blog/update') {
    return '我是博客的更新接口';
  }
};

module.exports = handleBlogRouter;
