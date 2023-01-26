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
  margin: 10% auto;

  height: 80px;
  width: 400px;
  font-size: 1rem;
  font-family: 'Gowun Dodum', sans-serif;

  background: #fff8f0;
  &:active {
    background: #ff6464;
  }
`;

function Answer({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;

}

export default Answer;
