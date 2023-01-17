import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Button = styled.button`
/* 공통 스타일 */
display: inline-flex;
outline: none;
border: none;
color: black;
cursor: pointer;
padding: 1rem 2.5rem;
margin-left : 10%;

/* 크기 */
height: 3rem;
width: 7rem;
font-size: 1rem;

/* 색상 */
background: white;
&:active {
  background: #bebebe;
}
`;


const BackButton = () => {
  const history = useHistory();
  function handleUseHistory(){
      history.goBack();
  }
    return (
      <Button onClick ={handleUseHistory}>
        이전
      </Button>
    )
};

export default BackButton;