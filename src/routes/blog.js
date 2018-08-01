const express = require('express');

const model = require('../db/database');

const router = express.Router();

router.get('/', (req, res) => {
  model.getPublishedPosts(req.dbConn).then((posts) => {
    res.render('index', { title: 'Blog', posts });
  });
});


// Create Post:
router.get('/new', (req, res) => {
  res.render('create', { title: 'Blog' });
});

router.post('/new', (req, res) => {
  model.createPost(req.dbConn, req.body);
  res.render('create', { title: 'Blog' });
});

module.exports = router;
