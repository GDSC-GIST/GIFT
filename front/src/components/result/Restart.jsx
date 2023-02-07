import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Footer = styled.footer`
  position : fixed;
  bottom : 0;
  width : 100%;
  z-index: 2;
`;

const Button = styled.button`
  border : 2px solid white;
  border-radius: 3.125rem;
  max-width: 31.25rem;
  height: 4rem;
  padding : 0.5rem 1rem;
  font-size : 24px;
  text-align : center;
  cursor : pointer;
  background : #f08080;
  margin-top : 5%;
  width: 100%;
  -webkit-box-align : center;
  align-items : center;
  -webkit-box-pack : center;
  justify-content : space-evenly;
  font-family: 'Gowun Dodum', sans-serif;
`;

export default function Restart(
    ) {
    return (
      <Footer>
      <Button>
      <Link to='/' style={{textDecoration : 'none', color: 'white'}}>
        다시 검사하기
      </Link>
      </Button></Footer>
    );
}

