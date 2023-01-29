import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import lottie  from '../assets/lottie';


const Prepare = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin : 0 auto;
`;

function PreparePage() {
    return (
        <Prepare>
            <br /><br /><br />
        <h2>당신의 선물이 준비되었습니다!</h2>
        <h3>{'>'} 클릭하여 선물 열기 {'<'}</h3>
        <Link to='/result'>
            <Lottie animationData={lottie} />
        </Link>
        
        </Prepare>
    );
}

export default PreparePage;