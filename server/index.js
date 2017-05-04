var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('../database/orm.js');

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

// EXAMPLE DATA SENT FOR A POST TO /QUESTIONS
/* {
*    username: 'Oliver',
*    title: 'Why is Oliver so Awesome?',
*    body: 'This is an example body' 
*  }
*
*/
app.post('/questions', function(req, res) {
  db.createNewQuestion(req.body.username, req.body.title, req.body.body);
});


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});



app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});