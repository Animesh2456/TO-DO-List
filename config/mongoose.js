//require mongoose
const mongoose = require('mongoose');
//connecting to the db
mongoose.connect('mongodb://localhost/contacts_List_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Successfully connected to DB');
});