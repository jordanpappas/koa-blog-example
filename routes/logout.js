var render = require('../lib/render');

module.exports = exports = function logout() {
  return function *logout(next) {
    if (this.path !== '/logout') {
      return yield next;
    }

    this.session.authed = false;
    this.body = yield render('index', {name:'unknown'});
  };
};