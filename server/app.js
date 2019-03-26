var express = require('express');
var path = require('path');
var logger = require('morgan');

var connection = require('./mysql/mysql');     //查询数据
var db = require('./mysql/db');     //添加数据
var del = require('./mysql/delete');     //删除数据
var chg = require('./mysql/change');     //修改数据

var app = express();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Cache-Control', 'no-cache');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', connection)
app.use('/', db)
app.use('/', del)
app.use('/', chg)

module.exports = app;
