import React from 'react';
import styled from 'styled-components';
import gift from '../styles/gift.png';
import { Link } from 'react-router-dom';

const giftimage = <img src={gift} alt='React'></img>;

const Prepare = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 512px;
    height: 768px;
    margin : 0 auto;
`;

function PreparePage() {
    return (
        <Prepare>
        <h2>당신의 선물이 준비되었습니다!</h2>
        <h3>{'>'} 클릭하여 선물 열기 {'<'}</h3>
        <Link to='/result'>
            {giftimage}
        </Link>
        
        </Prepare>
    );
}

export default PreparePage;