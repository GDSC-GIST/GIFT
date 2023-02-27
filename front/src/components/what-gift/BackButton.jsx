import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
  margin: 0 5% 0 20%;
  /* 크기 */
  height: 3rem;
  width: 9rem;
  font-size: 1rem;

  /* 색상 */
  background: transparent;
`;


const BackButton = () => {
  const history = useHistory();
  function handleUseHistory(){
      history.goBack();
  }
    return (
      <Button onClick ={handleUseHistory}>
        {'<'}  이전
      </Button>
    )
};

export default BackButton;