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

router.put('/change', function (req, res) {
    // console.log(req.body.name)
    var userChgSql = 'UPDATE website SET name = ? WHERE id = ?';
    var userChgSql_Params = [req.body.name, req.body.id];
    //改
    connection.query(userChgSql, userChgSql_Params, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------修改----------------------------');
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    });
});

// connection.end();

module.exports = router;