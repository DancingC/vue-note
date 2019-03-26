var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'nodeserver'
});

connection.connect();
var sql = 'SELECT * FROM website';
var str = '';
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR]:', err.message);
    }
    str = JSON.stringify(result)
    console.log(result)
});

router.get('/about', function (req, res) {
    res.send(str)
});

// connection.end();     //获取数据库数据

module.exports = router;