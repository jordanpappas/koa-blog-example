var render = require('../lib/render');

module.exports = exports = function posts(list) {
  return function *posts(next) {
    if (this.path !== '/posts') {
      return yield next;
    }

    this.body = yield render('posts', {posts: list});
  };
};