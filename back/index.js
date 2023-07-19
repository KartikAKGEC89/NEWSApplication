const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env'});



app.use(express.json());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

require('./database/db');

app.use(require('./routers/route'));


const middleware = (req, res, next) => {
    console.log("hello from middleware");
    next();
}


app.get("/signin", (req, res) => {
    res.send("hello signup");
});

app.get("/signup", (req, res) => {
    res.send("hello from logout");
});


const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on port`));