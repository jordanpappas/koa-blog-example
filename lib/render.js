var views = require('co-views');

module.exports = views(process.cwd() + '/views', {
  ext: 'jade'
});