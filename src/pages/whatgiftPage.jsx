import React from 'react';
import BackButton from '../components/what-gift/BackButton';
import NextButton from '../components/what-gift/NextButton';
import ProgressBar from '../components/what-gift/ProgressBar';
import Question from '../components/what-gift/Question';
import Answer from '../components/what-gift/Answer';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 512px;
    height: 80vh;
    margin : 0 auto;
    
`;

export default function whatgiftPage() {
  return (
    <>
      <ProgressBar percent='50'/>
      <Container>
      <Question title='Q1' question='질문을 적습니다.'/>
      <div >
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      <Answer>답변이 있습니다</Answer>
      </div>

      </Container> 
     <BackButton /> <NextButton />
      </>
      
  );
};
