//Falta instalar bod,cors dotenv y path
const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
var path = require('path');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
    console.log(`Server running on port 3000`)
})