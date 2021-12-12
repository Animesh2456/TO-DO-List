const express = require('express');
const bodyParser = require("body-parser");

const db = require('./config/mongoose');
const Tasks = require('./models/task');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use('/',require('./routes/index'));

app.set('view engine', 'ejs');
app.use(express.static('Assets'));
app.listen(port, function(err) {
    if (err) {
        console.log(err, "Error in listening to requests");
    }

    console.log("Connected to server at port", port);
});





