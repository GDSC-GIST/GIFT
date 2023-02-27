import styled from 'styled-components';
import React from 'react';
import StartButton from '../components/home/StartButton';
import gift from '../styles/gift.png';



const Start = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    max-width: 100%
    margin : auto;
    
`;


function StartPage({
    handleClickTest
}){
    return (
        <Start>
            <br /><br /><br />
            <h4>GDSC GIST</h4>
            <h1>선물 취향 테스트</h1>
            <img src={gift} alt="gift" width="350" height="200" />
            <br /><br />
            <StartButton
            onclickTest = {handleClickTest}
            />
        </Start>
    );
}



export default StartPage;