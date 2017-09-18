const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log('Server listening at port ' + PORT);
});
