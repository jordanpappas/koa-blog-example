var render = require('../lib/render');
var parse = require('co-body');

module.exports = exports = function() {
  return function *(next) {
    if (this.path !== '/login') {
      return yield next;
    }

    if (this.method === 'GET') {
      if (this.session.authed) this.redirect('/posts');
      this.body = yield render('login');  
    }

    if (this.method === 'POST') {
      var body = yield parse(this);

      if (body.username !== 'username' && body.password !== 'password') {
        this.body = yield render('index', {name: 'wrong user/pass'});
      } else {
        this.session.authed = true;
        this.redirect('/posts');
      }
    }
  };
};