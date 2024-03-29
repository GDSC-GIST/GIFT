import express from "express";
import path from "path";
import * as url from "url";
const __dirname = path.resolve();

import * as fs from "fs";
import * as http from "http";
const router = express.Router();
//위의 두개가 있어야 dirname가 작동한다.

import * as algorithm from "./lib/algorithm.js";
const app = express(); // express 서버에서 사용할 포트 설정
const PORT = 3000;

import cors from "cors"; //리액트 연동을 위한 준비

import bodyParser from "body-parser";

// DB
import * as mysql from "mysql";

var db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "gift",
});

db.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
//html submit 값을 보기 위한 도구

app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../front/build")));

app.get("/", (req, res) => {
  var _url = req.url;
  var d = url.parse(_url, true).query;
  console.log(d);
  res.sendFile(__dirname, "../front/build/index.html");
  // var html=start.HTML();
  // res.send(html);
});

// result process
app.post("/data2server", function (req, res) {
  var array = req.body.answer;
  console.log("we get this answer " + req.body);
  if (array.length < 6) {
    const index = algorithm.get_category(array);
    global.category_index = index;
    console.log("server by index is " + index);
    const index_json = {
      text: index,
    };
    res.send(index_json);
  } else {
    const index = category_index;
    console.log("big category is " + index);
    array = req.body.answer.slice(5);
    var result = 0;
    switch (index) {
      case 1:
        result = algorithm.category1(array);
        break;
      case 2:
        result = algorithm.category2(array);
        break;
      case 3:
        result = algorithm.category3(array);
        break;
      case 4:
        result = algorithm.category4(array);
        break;
      case 5:
        result = algorithm.category5(array);
        break;
      default: // 결과 출력 오류
        result = 99;
        break;
    }
    console.log("server by result is " + result);
    const result_json = {
      text: result,
    };
    res.send(result_json);
  }
});

app.post("/result/resultReaction", function (req, res) {
  var body = req.body;
  var sql =
    "INSERT INTO Feedback (FeedTime, Selection, result, Feedback) VALUES (CURRENT_TIMESTAMP, ?, ?, ?);";
  console.log(Date.now(), body.answer, body.result, body.reaction);
  if (body.reaction == 2) {
    var feedback = false;
  } else {
    var feedback = true;
  }
  db.query(
    sql,
    [JSON.stringify(body.answer), body.result, feedback],
    function (result, err) {
      if (err) {
        console.log(err);
      }
      console.log("Feedback of result number: " + body.result);
      const result_json = {
        text: body.result,
      };
      res.redirect(result_json);
    }
  );
});

app.get("/showmethefeedback", function (req, res) {
  db.query("SELECT * FROM Feedback;", function (err, result) {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});

/*app.use(express.static("public"));
app.use(function (req, res, next) {
  res.status(404);
  res.send(
    '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">' +
      "<html><head><title>404 페이지 오류</title></head>" +
      "<body><h1>찾을 수 없습니다</h1>" +
      "<p>요청하신 URL " +
      req.url +
      " 을 이 서버에서 찾을 수 없습니다..</p><hr>" +
      "</body></html>"
  );
});*/

app.listen(PORT, () => {
  console.log(`Express server running on 3000`);
});
