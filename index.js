const express = require('express');
const app = express();

const server = require('./dist/server');
const manifest = require('./dist/public/manifest.json');

app.use(express.static('dist/public'));

app.get('*', server.render(manifest));

app.listen(3000, () => {
  console.log('app running on port 3000');
});
