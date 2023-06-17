const server = require('express');
const app = server();
require('./database');



app.set('port', process.env.PORT || 50000);
app.set('json spaces', 2);

app.use(server.json());
app.use(server.urlencoded({ extended: false }));

app.use(require('./routes/tareaRoutes'));

module.exports = app;