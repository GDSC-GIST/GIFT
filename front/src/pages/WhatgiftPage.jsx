import React, { useState, useRef, useEffect } from "react";
import Question from "../components/what-gift/Question";
import Answer from "../components/what-gift/Answer";
import questions from "../assets/questions";
import { useHistory } from "react-router-dom";
import Image from "../components/what-gift/Image";
import Conveyer from "../components/what-gift/Conveyer";

function WhatgiftPage() {
  questions = questions;
  const [number, setNumber] = useState(1); //Q number
  const type = useRef(0); //type of Q
  const index = useRef(1); //Index of questions.json
  const [answers, setAnswers] = useState([]);
  const ansClicked = useRef(false);
  const qNum = useRef(10);
  const history = useHistory();
  const Percent = (number - 1) / qNum.current;

  const onClick = (e) => {
    ansClicked.current = true;
    setAnswers([...answers, e.target.name]); //or e.target.innerText
  };

  useEffect(() => {
    //answers의 값이 변할 때 실행
    // console.log(answers);
    if (ansClicked.current) {
      index.current += 1;
      if (number === qNum.current) {
        // console.log("question finished");
        data2server(true);
      }
      else if (number === 5) {  
        data2server();
      } else { 
        setNumber((prevNum) => prevNum + 1);
      }
    }
    ansClicked.current=false;
  }, [answers]);

  const data2server = (final = false) => {
    // console.log("DATA->SERVER");

    fetch("data2server", {
      //data2server 주소에서 받을 예정
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ answer: answers }), //객체를 보냄
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json); //typeof json.text == Number
        if (final) {
          // console.log("gotoprepare");
          history.push({pathname: "/prepare/" + json.text, state: {resultID: json.text, answers: answers}});
        } else {
          goSubType(Number(json.text));
          console.log("type change to " + type.current);
          setNumber((prevNum) => prevNum + 1);
        }
      });
  };

  const goSubType = (estimateNum) => {
    //세부 타입 결정(다음 질문, 질문 개수 조정)
    index.current = questions[0].infoIndex[estimateNum];
    type.current = estimateNum;
    qNum.current = qNum.current - 5 + questions[0].infoNum[estimateNum];
  };

  const makeQuestion = (q) => {
    //질문에 따라 나타나는 화면 결정
    if (q.opNum === 2) {
      const filename = "" + q.type + q.id + ".png";
      const imgHeight=window.innerWidth> 350?180:120;

      return (
        <>
          <Image height={imgHeight} filename={"question_img/" + filename} />
          <Answer onClick={onClick} name="0">
            {q.options[0]}
          </Answer>
          <Answer onClick={onClick} name="1">
            {q.options[1]}
          </Answer>
        </>
      );
    } else if (q.opNum === 3) {
      return (
        <>
          <Answer onClick={onClick} name="0">
            {q.options[0]}
          </Answer>
          <Answer onClick={onClick} name="1">
            {q.options[1]}
          </Answer>
          <Answer onClick={onClick} name="2">
            {q.options[2]}
          </Answer>
        </>
      );
    } else if (q.opNum === 4) {
      return (
        <>
          <Answer onClick={onClick} name="0">
            {q.options[0]}
          </Answer>
          <Answer onClick={onClick} name="1">
            {q.options[1]}
          </Answer>
          <Answer onClick={onClick} name="2">
            {q.options[2]}
          </Answer>
          <Answer onClick={onClick} name="3">
            {q.options[3]}
          </Answer>
        </>
      );
    }
  };

  return (
    <div>
      <Conveyer type={type.current} percent={Percent}></Conveyer>
      <div>
        <Question number={number} question={questions[index.current].content} />
      </div>
      <div>{makeQuestion(questions[index.current])}</div>
    </div>
  );
}

export default WhatgiftPage;
