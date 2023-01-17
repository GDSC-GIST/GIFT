import React from 'react';
import BackButton from '../components/what-gift/BackButton';
import NextButton from '../components/what-gift/NextButton';
import ProgressBar from '../components/what-gift/ProgressBar';
import Question from '../components/what-gift/Question';
import Answer from '../components/what-gift/Answer';



export default function whatgiftPage() {
  return (
    <div>
      <ProgressBar percent='50'/>
      <div>
        <Question title='Q1' question='질문을 적습니다.'/>
      </div>
      <div >
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      </div>
      <div class='pagebutton'>
      <BackButton /> 
      <NextButton />
      </div>
    </div>
  );
};
