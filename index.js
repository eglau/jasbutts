const express = require('express');
const app = express();

const server = require('./dist/server');
console.log(server);

// app.get('*', (req, res) => {
//   res.send('hello, world!');
// });

app.get('*', server.render());

app.listen(3000, () => {
  console.log('app running on port 3000');
});