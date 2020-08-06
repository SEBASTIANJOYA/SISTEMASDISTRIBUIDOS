const mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'orlando1904',
  password : 'uptc1234',
  database : 'dbdistribuidos',
  port:3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Errror de conexion: ' + err);
    return;
  }

 console.log('Conexion hecha id ' + connection.threadId);
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/index', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/ingresar', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT usuario,contraseña FROM usuarios WHERE usuario = ? AND contraseña = ?', [username, password], function(error, results, fields) {
			console.log(results.length);
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('home');
			} else {
				response.send('Usuario y contraseña incorrecto');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		return response.redirect('/index')
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);