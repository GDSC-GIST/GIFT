import React  from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: 1rem 2.5rem;
  margin: 32px auto;
  
  height: 70px;
  width: 360px;
  font-size: 1rem;
  font-family: 'Gowun Dodum', sans-serif;

  background: #fff8f0;
  &:active {
    background: #ff6464;
  }@media screen and (max-height: 600px) {
    margin: 16px auto; 
  }
  @media screen and (max-width: 350px){
      width: 250px; 
  }
`;

function Answer({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;

}

export default Answer;
