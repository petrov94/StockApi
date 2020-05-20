const server = require('./server');

server.listen(process.env.PORT);
console.log("Server working on " + process.env.PORT)
