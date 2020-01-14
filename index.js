const server = require('./api/server');
// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:5000 ***\n');
});