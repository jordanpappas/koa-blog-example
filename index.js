var session = require('koa-session');
var app = require('koa')();

app.use(session(app));
app.keys = ['secret'];

// 'database'
var posts = require('./conf/db');

// config
var port = process.argv[2] || 3000;

// routes
app.use(require('./routes/index')());
app.use(require('./routes/login')());
app.use(require('./routes/logout')());

app.use(require('./routes/add')(posts));
app.use(require('./routes/posts')(posts));


console.log('listening on port ' + port);
app.listen(port);