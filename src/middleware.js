const r = require('rethinkdb');

const middleware = (req, res, next) => {
  r.connect({ db: 'blog' }).then((dbConn) => {
    console.log('Connecting...');
    req.dbConn = dbConn;
  }).error((err) => {
    console.log(err);
  }).finally(() => {
    console.log('DB middleware finished.');
    next();
  });
};

module.exports = middleware;
