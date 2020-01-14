const express = require('express');

const postsRouter = require('../routers/posts-router.js');
const commentsRouter = require('../routers/comments-router.js');

const server = express();

server.use('/api/posts', postsRouter)
server.use('/api/posts/:id/comments', commentsRouter)

module.exports = server;