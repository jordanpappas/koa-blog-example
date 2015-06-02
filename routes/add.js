var render = require('../lib/render');
var parse = require('co-body');

module.exports = exports = function add(posts) {
  return function *add(next) {
    if (this.path !== '/add') {
      return yield next;
    }

    if (!this.session.authed) {
      return this.body = yield render('index', {name: ', you must login first!'});
    }

    if (this.method === 'GET') {
      return this.body = yield render('add');
    }

    if (this.method === 'POST') {
      var body = yield parse(this);
      
      posts.push({
        title: body.title,
        created: new Date,
        body: body.body
      });

      this.redirect('/posts');
    }
  };
};