var render = require('../lib/render');

module.exports = exports = function home() {
  return function *home(next) {
    if (this.path !== '/') {
      return yield next;
    }

    this.body = yield render('index', {name: 'Koa', isAuthed: this.session.authed });
  };
};