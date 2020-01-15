const express = require('express');

const postsRouter = require('../routers/posts-router.js');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h1>Is it working? yes.</h1>`);
})

server.use('/api/posts', postsRouter)

module.exports = server;