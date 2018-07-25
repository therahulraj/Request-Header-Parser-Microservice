const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');

var port = process.env.PORT || 3000;
var app = express();
app.use(useragent.express());
app.use(bodyParser.json());
app.use(cors());
app.get('/api/whoami', (req, res) => {
  res.send({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
    language: req.acceptsLanguages()[0],
    software: req.useragent.source
  })
})

app.listen(port, () => {
  console.log(`the server is up on ${port}`);
})
