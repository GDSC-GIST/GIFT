import React from 'react';
import styled from 'styled-components';
import Restart from '../components/result/Restart';
import Share from '../components/result/Share';
import Image from '../components/what-gift/Image';
import { useParams } from 'react-router-dom';
import results from '../assets/results.json';

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
    padding :2% 0;
`;

const Horizontal = styled.div`
    width: 100%;
    border-bottom: 1px solid #aaa;
    lineHeight: 0.1em;
    margin: 10px 0 0;

`;


function ResultPage(props) {    
    results=results;
    const {resultID}=useParams();
    const index=results[0].typeIndex[resultID[0]]+Number(resultID[1]);
    const img='result_img/'+resultID+'.png';

    console.log(index, results[index]);
    return (
        <>
        <Container>
        <Result>
            <Horizontal /><Horizontal />
            <h2>당신을 위한 선물은</h2>
            <h1>"{results[index].name}"</h1>
            <Image height='215' filename={img} ></Image>
            
            {results[index].content[0]} <br />
            {results[index].content[1]} <br />
            당신을 위한 선물을 구매하고 싶다면<br />
            아래 버튼을 눌러주세요 <br />
  
            <h4> 카카오톡 선물하기 </h4>
            <button onClick = {() => window.open(results[index].link,
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
