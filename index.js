const express = require('express');
require('dotenv').config();
const app = express();


app.use(express.static('public'));



app.get('/', (req, res) => {
    res.status(200).json({
        ok: true
    });
});

app.listen(process.env.PORT, () => {
    console.log(`run in port ${process.env.PORT}`);
});