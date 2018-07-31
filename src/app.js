const express = require('express');
const path = require('path');

const blogRouter = require('./routes/blog');
const middleware = require('./middleware');

const app = express();


// View layer
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static assets
app.use(express.static(path.join(__dirname, 'assets')));

// Middleware
// TODO: Fix this coupling
app.use(middleware);

app.use('/', blogRouter);
app.listen(3000);


module.exports = app;
