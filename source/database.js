const mongoose = require('mongoose');
const databaseConnection = 'mongodb://127.0.0.1/tareas';

mongoose.connect(databaseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));