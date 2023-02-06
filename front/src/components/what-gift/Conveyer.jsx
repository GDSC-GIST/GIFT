import React from "react";
import styled from 'styled-components';
import Box from "./Box";
const Svg = styled.svg`
    display: flex; 
    margin: 0px auto;
    max-width: 680px; 
    padding: 0 20px;
    @media screen and (max-width: 650px) {
        width: 350px; 
    }
`;

const Container=styled.div`
    margin-top:70px;
    text-align: center;
    @media screen and (max-width: 650px) {
        margin-top: 120px; 
    }
`;

const position=[40,93,146,199,252,305,358,411,464,517,570,623];

function Conveyer({type,percent}){
    console.log(percent, type);
    const num=Math.round(Number(percent)*12);
    console.log(num);
    const state=[];
    for(var i=0;i<num;i++){
        state.push({id: i, fill: "#959595"});
    }
    for(var i=num;i<12;i++){
        state.push({id: i, fill: "#ECECEC"});
    }
    const circleList=state.map(x => (<circle key={x.id} cx="10" cy="10" r="10" transform={"matrix(0 1 1 0 "+position[x.id]+" 0)"} fill={x.fill}/>));

    return(
    <Container>
        <Box type={type}/>
        <Svg viewBox="0 0 680 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H670C675.523 0 680 4.47715 680 10V10C680 15.5228 675.523 20 670 20H10C4.47716 20 0 15.5228 0 10V10Z" fill="#C4C4C4"/>
            {circleList}
        </Svg>
    </Container>
    );
};

export default Conveyer;