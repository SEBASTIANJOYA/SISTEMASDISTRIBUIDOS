const mysql      = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'tate19042001',
  database : 'sistemasdistribuidos',
  port:3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Errror de conexion: ' + err);
    return;
  }

 console.log('Conexion hecha id ' + connection.threadId);
});

