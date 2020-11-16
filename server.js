const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("App is Listening to",port) })