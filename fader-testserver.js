const express = require('express');
const opn = require('opn');
const app = express();

app.use('', express.static('dist/fader-test'));


app.listen(3000, () => {
  // opn('http://localhost:3000');
  console.log('Serving Fader Test at http://localhost:3000!');
});