const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));

/*
npm i express mongoose colors dotenv path
npm i -D nodemon
*/
