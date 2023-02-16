import * as mysql from "mysql";

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '2905',
  database : 'gift'
});
 
connection.connect();
var time=now();
var testQuery1 = "INSERT INTO `user` (`date`,`feedback`) VALUES (time,'굿굿');";
 
connection.query(testQuery1, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
var testQuery = "SELECT * FROM user"; 
connection.query(testQuery, function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});

connection.end();