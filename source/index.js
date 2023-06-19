const app = require('./server');
app.listen(app.get('port'), () => {
    console.log("servidor escuchando on ", app.get('port'));
});