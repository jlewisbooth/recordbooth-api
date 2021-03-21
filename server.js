/* Modules */
const express = require('express');
let app = express();

/* Routers */

app.use( (req,res,next) => {
    next();
})

app.get('/', async (req, res) => {
    res.send("HI THERE");
});

let port = 3000;

app.listen(port, () => {
    console.log(`Web app listening on port ${port}!`)
})

