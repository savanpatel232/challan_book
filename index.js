const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const { json } = require('express');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const registerUserRoute = require('./routes/registerUser');
const loginRoute = require('./routes/login');
const getUser = require('./routes/getUser');


const port = 8000;
app.listen(port, async function () {
    console.log('server is listening on port......' + port);
});


app.use('/api/checkServer', loginRoute);

app.use('/api/registerUser', registerUserRoute);

app.use('/api/getUser', getUser);



