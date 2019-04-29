var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var dbConfig = require('../db/dbConfig')
var contentSql =  require('../db/contentSql')

var pool = mysql.createPool(dbConfig.mysql)
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* 
*  content
*/

router.post('/contList',function(req, res, next) {
  pool.getConnection(function(err,conection){
    var _res = res
    if (err) throw err
    conection.query(contentSql.queryAll,function(err,res,result){
      var data = []
      if (err) throw err
      if(res) {
        data = res
      }
      setTimeout(function () {
        data=JSON.stringify(data)
        _res.end(data);
      },300);
      conection.release();
    })
  })
});


module.exports = router;
