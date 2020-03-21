const handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === 'POST' && url === '/api/user/login') {
    return {
      name: '刘健',
      slogan: '加油'
    };
  }
};

module.exports = handleUserRouter;
