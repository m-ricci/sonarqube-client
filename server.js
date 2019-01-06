const express = require('express');
const path = require('path');
const app = express();
const engines = require('consolidate');
const port = 3000;

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public/view'));

app.get('/sonarqube', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/view', '/index.html'));
});

const AppRouter = require('./app-router');
app.use('/sonarqube', AppRouter);