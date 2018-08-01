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
  console.log(data);
  const promise = r.table('posts')
    .insert(parsedData)
    .run(conn)
    .then((resp) => {
      console.log(resp);
    })
    .error((err) => {
      console.log(err);
    });
  return promise;
};

const model = {
  getPublishedPosts,
  createPost,
};

module.exports = model;
