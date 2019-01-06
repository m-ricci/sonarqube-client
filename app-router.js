const express = require('express');
const app = express();
const AppRouter = express.Router();

AppRouter.route('/').get(function (req, res) {
  res.render('index.html');
});

module.exports = AppRouter;