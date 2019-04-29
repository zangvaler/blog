var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var dbConfig = require('../db/dbConfig')
var UserSQL =  require('../db/Usersql')

var pool = mysql.createPool(dbConfig.mysql)
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* post users listing. 
*  注册
*/
router.post('/creatUsers',function(req, res, next) {
  var param =  req.body 
  var username = param.username
  var password = param.password

  pool.getConnection(function(err,conection){
    var _res = res
    if (err) throw err
    conection.query(UserSQL.queryAll,function(err,res,result){
      var isTrue = false
      if(res){
        for (let i = 0; i < res.length; i++) {
          if (res[i].username == username && res[i].pass_word == password) {
            uid = res[i].id
            isTrue = true
          }
        }
      }
      var data = {}
      data.isLogin =  isTrue
      if(isTrue) {
        data.result = {
            code: 1,         
            msg: '用户已存在'
        };
      }else{
        conection.query(UserSQL.insert,[username,password],function (err,result) {  
          if (err) throw err
            if(result) {
                data.result = {
                    code: 1,
                    msg: '注册成功'
                };
              
            } else {
                data.result = {
                    code: 2,
                    msg: '注册失败'
                };
            }
           
        })
      }
      setTimeout(function () {
        data=JSON.stringify(data)
        _res.end(data);
      },300);
      conection.release();
    })
  })
});

/* post users listing. 
*  登录
*/
router.post('/login',function(req, res, next) {
  var param =  req.body 
  var username = param.username
  var password = param.password

  pool.getConnection(function(err,conection){
    var _res = res
    if (err) throw err
    conection.query(UserSQL.queryAll,function(err,res,result){
      var isTrue = false
      var ID ;
      var Admin;
      if(res){
        for (let i = 0; i < res.length; i++) {
          if (res[i].username == username && res[i].pass_word == password) {
            ID = res[i].id
            Admin = res[i].Admin
            isTrue = true

          }
        }
      }
      var data = {}
      data.isLogin =  isTrue
      if (err) throw err
      if(isTrue) {
        data.result = {
            id:ID,
            code: 1,         
            msg: '登录成功',
            admin:Admin,
            username:username
        };
      }else{
        data.result = {
          code: 2,         
          msg: '该用户不存在，请先注册'
      };
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
