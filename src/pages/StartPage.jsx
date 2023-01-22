import styled from 'styled-components';
import React from 'react';
import StartButton from '../components/home/StartButton';
import gift from '../styles/gift.png';

const giftimage = <img src={gift} alt='React'></img>;


const Start = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 512px;
    height: 768px;
    margin : 0 auto;
    
`;


function StartPage({
    handleClickTest
}){
    return (
        <>
        <Start>
            <h4>GDSC GIST</h4>
            <h1>선물 취향 테스트</h1>
            {giftimage}
            <br /><br />
            <StartButton
            onclickTest = {handleClickTest}
            />
        </Start>
        </>
    );
}



export default StartPage;