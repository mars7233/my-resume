const express = require('express');
const app = express();
app.use(express.static('./example/dist'));

const port = 8080;

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});