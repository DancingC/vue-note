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

router.post('/add', function (req, res) {
    // console.log(req.body.name)
    var userAddSql = 'INSERT INTO website(id,name) VALUES(null,?)';
    var userAddSql_Params = [req.body.name];
    // var str = '';
    //增
    connection.query(userAddSql, userAddSql_Params, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        // str = JSON.stringify(result)
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    });
});

// connection.end();

module.exports = router;