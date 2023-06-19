const server = require('express');
const app = server();
const taskRouter = require('./routes/tareaRoutes')
require('./database');


app.set('port', process.env.PORT || 50000);
app.use(server.json());
app.use(server.urlencoded({extended: false}));
app.use('/api', taskRouter);
app.set('json spaces', 2);


app.get("/", (req, res) => {
    res.send("Welcome")
})


module.exports = app;