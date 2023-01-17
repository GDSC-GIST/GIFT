import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Button = styled.button`
/* 공통 스타일 */
display: inline-flex;
outline: none;
border: none;
color: black;
cursor: pointer;
padding: 1rem 2.5rem;
margin-left:20%;
margin-top: 5%;

/* 크기 */
height: 3rem;
width: 7rem;
font-size: 1rem;

/* 색상 */
background: #bebebe;
&:active {
  background: #828282;
}

`;

export default function NextButton(
    ) {
    return (
      <Button>
      <Link to='/result'>
        다음
      </Link>
      </Button>
    );
}