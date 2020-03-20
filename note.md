1. res.end 返回浏览器出现乱码的解决办法：

```js
res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
```
