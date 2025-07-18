const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(3000, 'localhost', () => {
  console.log('listening on http://localhost:3000');
});
