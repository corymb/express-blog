const express = require('express');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Blog', posts: [{ title: 'First Post!' }] });
});

app.listen(3000);
