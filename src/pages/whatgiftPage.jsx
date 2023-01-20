import React, { useState } from 'react';
import BackButton from '../components/what-gift/BackButton';
import NextButton from '../components/what-gift/NextButton';
import ProgressBar from '../components/what-gift/ProgressBar';
import Question from '../components/what-gift/Question';
import Answer from '../components/what-gift/Answer';
import questions from '../assets/questions'

function WhatgiftPage() {

  questions=questions;
  const [type,setType]=useState(0);
  const [number,setNumber]=useState(1);
  const [clicked,setClicked]=useState(0);
  const onClick=(e)=>{
    console.log(e.target.innerText);
    setNumber((prevNum)=>prevNum+1);
  };

  const makeQuestion=(opNum)=>{
    if(opNum===2){
      return (
        <>
      <Answer onClick={onClick}>{questions[number].options[0]}</Answer>
      <Answer onClick={onClick}>{questions[number].options[1]}</Answer>
      </>
      );
    }
    else if(opNum===4){
      return (
        <>
      <Answer onClick={onClick}>{questions[number].options[0]}</Answer>
      <Answer onClick={onClick}>{questions[number].options[1]}</Answer>
      <Answer onClick={onClick}>{questions[number].options[2]}</Answer>
      <Answer onClick={onClick}>{questions[number].options[3]}</Answer>
      </>
      );
    }
  };

  return (
    <div>
      <ProgressBar percent='50'/>
      <div>
        <Question number={number} question={questions[number].content}/>
      </div>
      <div>
      {makeQuestion(questions[number].opNum)}
      </div>
      <div class='pagebutton'>
      <BackButton /> 
      <NextButton />
      </div>
    </div>
  );
}

export default WhatgiftPage;