const util = require('util');
require('util.promisify').shim();

const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var bookData = require('./bookData.json')

var app = express()
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}))
app.set('view engine')

app.use(express.static('public'))

app.get('/', function (req, res, next) {
    res.status(200).render('mainPage', {bookData})
})

app.get('*', function (req, res) {
    res.status(404).render('404.handlebars')
});
  
app.listen(port, function () {
    console.log("== Server is listening on port", port);
});