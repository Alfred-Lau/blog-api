const { login } = require('../controllers/user');
const { SuccessModel, ErrorModel } = require('../models/resModel');

const handleUserRouter = req => {
  const method = req.method;
  const path = req.path;

  if (method === 'POST' && path === '/api/user/login') {
    const { username, password } = req.body;
    const res = login(username, password);
    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel('登录失败');
    }
  }
};

module.exports = handleUserRouter;
