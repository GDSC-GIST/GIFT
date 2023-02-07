import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { Link,useParams } from 'react-router-dom';
import lottie  from '../assets/lottie';


const Prepare = styled.div`
  position : relative;
  background: #fff8f0;
  flex : 1;
  border: 0px solid transparent;
  overflow : hidden auto;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  -webkit-box-pack : center;
  -webkit-box-align : center;
  align-items : center;
  height: 100vh;
  max-width: 500px;
  width: 100%;
  filter: drop-shadow(transparent 0px 0px 0px);
  border-radius: 0px;
  margin : 0 auto;
`;

function PreparePage() {
    const {resultID}=useParams(); //type: string
    return (
        <Prepare>
        <h2>당신의 선물이 준비되었습니다!</h2>
        <h3>{'>'} 클릭하여 선물 열기 {'<'}</h3>
        <Link to={'/result/'+resultID}>
            <Lottie animationData={lottie} />
        </Link>
        
        </Prepare>
    );
}

export default PreparePage;
