require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 3500;

server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});
