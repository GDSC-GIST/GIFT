import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Button = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;


  /* 크기 */
  height: 3rem;
  width: 7rem;
  font-size: 1rem;

  /* 색상 */
  background: #ff6464;

  }
`;

export default function NextButton(
    ) {
    return (
      <Button>
      <Link to='/prepare' style={{textDecoration : 'none'}}>
        다음
      </Link>
      </Button>
    );
}