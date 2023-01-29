import React from 'react';
import styled from 'styled-components';
import Restart from '../components/result/Restart';
import Share from '../components/result/Share';
import Image from '../components/what-gift/Image';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Result = styled.div`
    display: flex;
    height: auto;
    width: 360px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-color : #fff8f0;
`;


function ResultPage(props) {
    return (
        <>
        <Container>
        <Result>
            <h2>당신을 위한 선물은</h2>
            <h1>"식물"</h1>
            <Image height='215' filename='result_img/1_1.png'></Image>

            ~~한 당신에게는 식물이 어울려요 <br />
            식물에는 무슨 식물, 무슨 식물이 있어요 <br />
            당신을 위한 선물을 구매하고 싶다면<br />
            아래 버튼을 눌러주세요 <br />
            <h4> 카카오톡 선물하기 </h4>
            <button onClick = {() => window.open('https://gift.kakao.com/page/4137',
            '_blank')}> 카카오톡 선물하기 </button>
            <br />위의 선물들이 마음에 든다면?
            <h4> 내 결과 공유하기 </h4>
            <Share /> <br />
        </Result>
        <Restart />
        </Container>

        </>
    );
}

export default ResultPage;
