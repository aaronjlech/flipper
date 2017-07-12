const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const validator = require('validator');
const bodyParser = require('body-parser');
const controller = require('./server/controllers/index');

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use(bodyParser.json());

app.use('/users', controller.usersController);
app.use('/message', controller.messagesController)
// app.use('/messages');


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = app;
const newApp = express();
