const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const preFetch = (req, res, next) => {
  console.log('request to instance 2')
  next()
}

app.use('/', preFetch, createProxyMiddleware({
  target: 'https://random-data-api.com/api/users/random_user?size=1', changeOrigin: true
}));
app.listen(3001);