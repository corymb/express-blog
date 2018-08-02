const express = require('express');

const model = require('../db/database');

const router = express.Router();

// List Posts
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

// View Post:
router.get('/:slug', (req, res) => {
  model.getPost(req.dbConn, req.params.slug).then((post) => {
    res.render('view', post);
  });
});

// Delete Post:
router.delete('/delete/:id', (req, res) => {
  model.deletePost(req.dbConn, req.params.id).then((post) => {
    res.redirect('/');
  });
});



module.exports = router;
