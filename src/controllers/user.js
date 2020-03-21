const login = (username, password) => {
  if (username === 'lj' && password === 'lj') {
    return true;
  }
  return false;
};

module.exports = {
  login
};
