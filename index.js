const server = require('./data/api/server.js');
// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

const port = process.env.PORT || 4000;

server.listen(5000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});