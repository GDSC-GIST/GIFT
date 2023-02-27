//프론트엔드에서 받은 정보들을 데이터 베이스에 저장함.
import * as mysql from "mysql";
import express from "express";
const app= express();
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '2905',
  database : 'gift'
});

connection.connect();
var test="이건 아니다.";
var num=0;
var testQuery1 = `INSERT INTO user (feedback, Eval) VALUES ("${test}", ${num});`; 
connection.query(testQuery1, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(`the solution is..\n`, results);
});
var testQuery = "SELECT * FROM user;"; 
connection.query(testQuery, function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});

connection.end();