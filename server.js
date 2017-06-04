/**
 * Author: ひまわり(dtysky<dtysky@outlook.com>)
 * Github: https://github.com/dtysky
 * Created: 2017/6/4
 */
const path = require('path');
const express = require('express');
const app = new express();

const port = 9999;

app.use('/',
  express.static(`${__dirname}`)
);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
