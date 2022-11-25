const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

server.listen((port), () => {
  console.log('Server listening at port %d', port);
})

module.exports = app;
