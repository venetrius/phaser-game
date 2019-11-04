"use strict";

const PORT          = 3030;
const express       = require("express");
const bodyParser    = require("body-parser");
const morgan        = require("morgan");
const app           = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.Router().get("/", function(req, res){
   res.status(200).sendFile('C:\\Projects\\phaser-game\\index.html')
  }))

const server = app.listen(PORT, () => {

  console.log("Example app listening on port " + PORT);

});

// it is used by Mocha
module.exports = server;