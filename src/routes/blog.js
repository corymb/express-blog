const express = require('express');

const model = require('../db/database');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Blog', posts: model.getPublishedPosts() });
});


module.exports = router;
