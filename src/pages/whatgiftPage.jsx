import React, { useState,useRef, useEffect } from 'react';
import ProgressBar from '../components/what-gift/ProgressBar';
import Question from '../components/what-gift/Question';
import Answer from '../components/what-gift/Answer';
import questions from '../assets/questions';
import testImg from '../assets/result_img/test.png';
import { useHistory } from 'react-router-dom';

function WhatgiftPage() {

  questions=questions;
  const [number,setNumber]=useState(1); //Q number
  const type=useRef(0); //type of Q
  const index=useRef(1); //Index of questions.json
  const [answers,setAnswers]=useState([]);
  const [clicked,setClicked]=useState(0);
  const ansClicked=useRef(false);
  const qNum=useRef(12);
  const history=useHistory();
  const Percent = (number-1)/qNum.current*100;
  const onClick=(e)=>{
    ansClicked.current=true;
    setAnswers([...answers,e.target.name]); //or e.target.innerText
  
    //test: transfer data to server
    fetch("http://localhost:3000/text", { //text 주소에서 받을 예정
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e.target.name), //객체를 보냄
    });

    };

  useEffect(()=>{ //answers의 값이 변할 때 실행
    console.log(answers);

    if(ansClicked.current){
      index.current+=1;

      if(number===qNum.current){
        history.push('/prepare');
      }
      if(type.current===6 || number===6){
        console.log("finished default Qs");
        //*TODO: 서버에 answers 정보 보내기
        const estimate=5;  //서버에서 정보(예측된 타입) 받아와서 넣을 예정 : 
        //*TODO: 6번 타입일때 어떻게 처리할지 생각해봐야함
        goSubType(estimate);
      }
      setNumber((prevNum)=>prevNum+1);
    }
    ansClicked.current=false;
  },[answers]);

  const goSubType=(estimateNum)=>{ //세부 타입 결정(다음 질문, 질문 개수 조정)
    index.current=questions[0].infoIndex[estimateNum];
    type.current=estimateNum;
    
    if(estimateNum===6) qNum.current+=1;
    else qNum.current=qNum.current-6+questions[0].infoNum[estimateNum];
  };

  const makeQuestion=(q)=>{ //질문에 따라 나타나는 화면 결정
    if(q.opNum===2){
      return (
        <>
        <img src={testImg} alt='test_img' height='300'/>
        <Answer onClick={onClick} name='0'>{q.options[0]}</Answer>
        <Answer onClick={onClick} name='1'>{q.options[1]}</Answer>
        </>
      );
    }
    else if(q.opNum===3){
      return (
        <>
        <Answer onClick={onClick} name='0'>{q.options[0]}</Answer>
        <Answer onClick={onClick} name='1'>{q.options[1]}</Answer>
        <Answer onClick={onClick} name='2'>{q.options[2]}</Answer>
        </>
      );
    }
    else if(q.opNum===4){
      return (
        <>
        <Answer onClick={onClick} name='0'>{q.options[0]}</Answer>
        <Answer onClick={onClick} name='1'>{q.options[1]}</Answer>
        <Answer onClick={onClick} name='2'>{q.options[2]}</Answer>
        <Answer onClick={onClick} name='3'>{q.options[3]}</Answer>
        </>
      );
    }
  };


  return (
    <div>
      <ProgressBar  percent={Percent}/>
      <div>
        <Question number={number} question={questions[index.current].content}/>
      </div>
      <div>
      {makeQuestion(questions[index.current])}
      </div>
    </div>
  );
}

export default WhatgiftPage;