const getList = (author, kw) => {
  return [
    {
      id: 1,
      createTime: +new Date(),
      title: '标题A',
      content: '内容A',
      author: 'liujian'
    },
    {
      id: 2,
      createTime: +new Date(),
      title: '标题B',
      content: '内容B',
      author: 'liujian'
    }
  ];
};

const getDetailById = id => {
  return {
    content: '我是内容详情'
  };
};

const newBlog = (data = {}) => {
  console.log('blog data', data);
  return {
    id: 3
  };
};

const updateBlog = (id, blog) => {
  return true;
};

const deleteBlog = id => {
  return true;
};

module.exports = {
  getList,
  getDetailById,
  newBlog,
  updateBlog,
  deleteBlog
};
