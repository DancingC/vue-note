var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";
var express = require('express');
var router = express.Router();

// 数据库添加数据
router.post('/insert', function(req, res) {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
        if(err) throw err;
        var dbase = db.db("nodeserver");
        var myobj = {"name":req.body.name,"_id": new Date().getTime()};
        dbase.collection("site").insertOne(myobj, function(err, res){
            if(err) throw err;
            console.log("文档插入成功");
            db.close();
        })
    })
})

// 获取数据库数据
router.get('/getData', function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbase = db.db("nodeserver");
        dbase.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.send(result)
            db.close();
        });
    });
});

// 删除一条数据
router.delete('/delete', function(req, res) {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
        if(err) throw err;
        var dbase = db.db("nodeserver");
        var myobj = {"_id":req.body.id};
        console.log(myobj)
        dbase.collection("site").deleteOne(myobj, function(err, res){
            if(err) throw err;
            console.log("文档删除成功");
            db.close();
        })
    })
})

module.exports = router;