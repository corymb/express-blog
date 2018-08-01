const r = require('rethinkdb');

const getPublishedPosts = (conn) => {
  const promise = r.table('posts')
    .run(conn)
    .then(cursor => cursor.toArray())
    .error((err) => {
      console.log(err);
    });
  return promise;
};


const createPost = (conn, data) => {
  const parsedData = data;
  parsedData.publishedAt = Date.now();
  parsedData.slug = data.title
    .toLocaleLowerCase()
    .replace(/[-\s]+/g, '-');
  const promise = r.table('posts')
    .insert(parsedData)
    .run(conn)
    .error((err) => {
      console.log(err);
    });
  return promise;
};

const getPost = (conn, slug) => {
  const promise = r.table('posts').filter({ slug })
    .run(conn)
    .then(cursor => cursor.next())
    .error((err) => {
      console.log(err);
    });
  return promise;
};

const deletePost = (conn, slug) => {
  console.log(slug);
};

const model = {
  getPublishedPosts,
  createPost,
  getPost,
  deletePost,
};

module.exports = model;
