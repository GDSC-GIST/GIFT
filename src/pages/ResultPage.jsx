import React from 'react';
import styled from 'styled-components';
import Restart from '../components/result/Restart';
import Share from '../components/result/Share';


const Result = styled.div`
    position : relative;
    width: 414px;
    height: 85vh;
    background-size: cover;
    background-color : #fff8f0;
    margin : 0 auto;
`;

const Container = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

function ResultPage(props) {
    return (
        <>
        <Result>
            <Container>
            <br /><br /><br />
            <h2>당신을 위한 선물은</h2>
            <h1>"식물"</h1>

            ~~한 당신에게는 식물이 어울려요 <br />
            ~~하지 않으신가요??? <br />
            ~~~~
            ~~~
            <h4> 내 결과 공유하기 </h4>
            </Container>
            <Share /> 
        </Result>
        <Restart />        
        </>
    );
}

export default ResultPage;
