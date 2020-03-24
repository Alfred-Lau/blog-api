const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, 'data.txt');

// 使用 二进制 一次性读取
fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

// 使用 stream 流读取
