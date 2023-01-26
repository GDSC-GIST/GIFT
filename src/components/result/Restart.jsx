import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  text-align: center;

  height: 86px;
  width: 450px;
  font-size: 1.2rem;

  background : #ff6464;

  margin : 0 auto;

  font-family: 'Gowun Dodum', sans-serif;
`;

export default function Restart(
    ) {
    return (
      <Button>
      <Link to='/' style={{textDecoration : 'none', color: 'white'}}>
        다시 검사하기
      </Link>
      </Button>
    );
}

