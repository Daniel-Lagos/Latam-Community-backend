const express = require('express');
const app = express();

require('dotenv').config();

//public folder
app.use(express.static('public'));

//lectura y parse del body

app.use(express.json());

//routers
app.use('api/auth', require('./routes/auth'));

app.use('api/community', require('./routes/community'));

app.listen(process.env.PORT, () => {
    console.log(`run in port ${process.env.PORT}`);
});