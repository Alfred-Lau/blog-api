const { execPromise } = require('../db/mysql');

const getList = async (author, kw) => {
  /* 注意写法  1=1 */
  let sql = `select * from blogs where 1=1 `;

  if (author) {
    sql += `and author='${author}'`;
  }

  if (kw) {
    sql += `and title like '%${kw}%'`;
  }

  sql += `order by 'createTime' desc;`;

  try {
    const res = await execPromise(sql);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getDetailById = async id => {
  let sql = `select * from blogs where 1=1 `;
  if (id) {
    sql += `and id = '${id}';`;
  }
  const res = await execPromise(sql);
  return {
    content: res[0]
  };
};

const newBlog = async (data = {}) => {
  const { title, content, author } = data;
  const createTime = +new Date();

  let sql = `insert into blogs (title, content, createTime, author) values ('${title}','${content}','${createTime}', '${author}');`;
  const res = await execPromise(sql);

  return {
    id: res.insertId
  };
};

const updateBlog = async (id, data) => {
  const { title, content, author } = data;
  const createTime = +new Date();

  let sql = `update blogs set title='${title}', content='${content}', createTime='${createTime}', author='${author}' where id = '${id}';`;
  const res = await execPromise(sql);

  return res.serverStatus === 2;
};

const deleteBlog = async id => {
  const sql = `delete from blogs where id = '${id}';`;
  const res = await execPromise(sql);
  return res.serverStatus === 2;
};

module.exports = {
  getList,
  getDetailById,
  newBlog,
  updateBlog,
  deleteBlog
};
