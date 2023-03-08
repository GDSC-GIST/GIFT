import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/downArrow.svg';

const Footer = styled.footer`
  position : fixed;
  bottom : -0.5px;
  width : 100%;
  z-index: 2;
  filter: drop-shadow(0 0 0.4rem #aaaaaa);
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-content : flex-start;
  margin: 0 auto;
`;

const Button = styled.button`
  border : 0px solid white;
  // border-radius: 3.125rem;
  max-width: 31.25rem;
  height: 4rem;
  padding : 0.5rem 1rem;
  font-size : 24px;
  text-align : center;
  cursor : pointer;
  background : ${props=>props.color};
  margin-top : 5%;
  width: 100%;
  -webkit-box-align : center;
  align-items : center;
  -webkit-box-pack : center;
  justify-content : space-evenly;
  font-family: 'Gowun Dodum', sans-serif;
  color : white;
  text-shadow: 0.5px 0.5px 2px black , 0 0 1em #eeeeee;
`;

const SArrow=styled(Arrow)`
  height:20px;
  max-height: 100px;
  filter: drop-shadow(.5rem .5rem 1rem #e23);
  
`;

export default function Restart({color}) {
    return (
      <Footer>
        {/* <SArrow /> */}
      <Button color={color} onClick={ () => {
        window.location.href ='/';
    }}>
        다시 검사하기
      </Button></Footer>
    );
}

