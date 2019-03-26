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

router.delete('/delete', function (req, res) {
    var userAddSql = 'DELETE FROM website WHERE id='+req.body.id+'';
    // var str = '';
    //删
    connection.query(userAddSql, function (err, result) {
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