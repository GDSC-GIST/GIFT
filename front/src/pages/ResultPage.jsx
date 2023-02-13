import React from "react";
import styled from "styled-components";
import Restart from "../components/result/Restart";
import Share from "../components/result/Share";
import Image from "../components/what-gift/Image";
import { useParams } from "react-router-dom";
import results from "../assets/results.json";
import give_gift from "../assets/give_gift.png";
import Satisfaction from "../components/result/Satisfaction";


const Container = styled.div`
  min-height: 100%;
  display: flex;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  backgroun-position: center;
`;

const Back = styled.div`
  position : relative;
  background: #f08080;
  flex : 1;
  border-width: 0px;
  border-color : transparent;
  border-style : solid;
  overflow : hidden auto;
  display: flex;
  flex-direction : column;
  -webkit-box-pack : start;
  justify-content : start;
  -webkit-box-align : center;
  align-items : center;
  height: 100%;
  max-width: 500px;
  width: 100%;
  filter: drop-shadow(transparent 0px 0px 0px);
  border-radius: 0px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: #fff8f0;
  margin: 5%;
  line-height: 1.8;
  font-size: 1.125rem;
`;

const ButtonIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const Content = styled.div`
    position : relative;
    display: flex;
    white-space: pre-line;
    margin: 5% 5% 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 7% 5%;

`;

function ResultPage(props) {
  results = results;
  const { resultID } = useParams();
  const index = results[0].typeIndex[resultID[0]] + Number(resultID[1]);
  const img = "result_img/" + resultID + ".png";

  console.log(index, results[index]);
  return (
      <Container>
      <Back>
        <Result>
          <br />
          <h2>당신을 위한 선물은</h2>
          <h1>"{results[index].name}"</h1>
          <Image height="215" filename={img}></Image>
          <Content>
          {results[index].content[0]} <br />
          {results[index].content[1]} <br />
          </Content><br />
          추천한 선물이 마음에 드시나요?<br />
          <Satisfaction /><br />
          당신을 위한 선물을 구매하고 싶다면?
          <h4> 카카오톡 선물하기 </h4>
          <button onClick={() => window.open(results[index].link, "_blank")}>
            {" "}
            <ButtonIcon src={give_gift}></ButtonIcon>{" "}
          </button>
          <br />
          위의 선물들이 마음에 든다면?
          <h4> 내 결과 공유하기 </h4>
          <Share /> <br />
        </Result>
        <Restart />
      </Back></Container>
  );
}

export default ResultPage;
