const express = require('express');

const model = require('../db/database');

const router = express.Router();

router.get('/', (req, res) => {
  model.getPublishedPosts(req.dbConn).then((posts) => {
    res.render('index', { title: 'Blog', posts });
  });
});


module.exports = router;
