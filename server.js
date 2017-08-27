const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const validator = require('validator');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpackConfig = require('./webpack.config.js');
const morgan = require('morgan');
const controller = require('./server/controllers');
const uristring =
    process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost:27017/flipper_db'

mongoose.connect(uristring, (err, res) => {
        if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
});


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



app.use('/api/users', controller.usersController);
app.use('/api/messages', controller.messagesController);
app.use('/api/likes', controller.likesController);
app.use('/api/friends', controller.friendsController);

const server = app.listen(process.env.PORT || 3001, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = app;
