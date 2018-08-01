const r = require('rethinkdb');

const getPublishedPosts = (conn) => {
  const promise = r.table('posts').run(conn
  ).then((cursor) => {
    return cursor.toArray();
  }).error((err) => {
    console.log(err);
  })
  return promise
}

const model = {
  getPublishedPosts: getPublishedPosts,
};

module.exports = model;
