const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const validator = require('validator');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpackConfig = require('./webpack.config.js');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const models = require('./server/models');
const controller = require('./server/controllers');


mongoose.connect('mongodb://localhost:27017/flipper_db');


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
app.use(session({secret: 'theresomethingonthewing'}))
app.use(passport.initialize())
app.use(passport.session())


app.use('/api/users', controller.usersController);
app.use('/api/messages', controller.messagesController);
app.use('/api/likes', controller.likesController);
app.use('/api/friends', controller.friendsController);

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = app;
