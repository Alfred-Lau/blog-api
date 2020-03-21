const {
  getList,
  getDetailById,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blog');
const { SuccessModel, ErrorModel } = require('../models/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || '';
    const kw = req.query.kw || '';

    const list = getList(author, kw);

    return new SuccessModel(list);
  }

  if (method === 'GET' && path === '/api/blog/detail') {
    const id = req.query.id;
    const detail = getDetailById(id);
    return new SuccessModel(detail);
  }

  if (method === 'POST' && path === '/api/blog/new') {
    const res = newBlog(req.body);
    return new SuccessModel(res);
  }

  if (method === 'DELETE' && path === '/api/blog/del') {
    const { id } = req.query;
    const res = deleteBlog(id);

    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel('删除博客失败');
    }
  }

  if (method === 'POST' && path === '/api/blog/update') {
    const { id, content } = req.query;
    const res = updateBlog(id, content);

    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel('更新博客失败');
    }
  }
};

module.exports = handleBlogRouter;
