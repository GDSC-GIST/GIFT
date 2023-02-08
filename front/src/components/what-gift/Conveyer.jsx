import React from "react";
import styled from 'styled-components';
import Box from "./Box";
const Svg = styled.svg`
    display: flex; 
    margin: 0px auto;
    max-width: 550px; 
    padding: 0 5%;
    @media screen and (max-width: 650px),screen and (max-height: 600px) {
        width: 350px; 
    }
    @media screen and (max-width: 350px){
        width: 250px; 
    }
`;

const Container=styled.div`
    margin-top: 70px;
    text-align: center;
    @media screen and (max-height: 600px) {
        margin-top: 40px; 
    }
`;

const position=[55,110,165,220,275,330,395,450,505,560,615];

function Conveyer({type,percent}){
    const num=Math.round(Number(percent)*11);
    const state=[];
    for(var i=0;i<=num;i++){
        state.push({id: i, fill: "#959595"});
    }
    for(var i=num+1;i<11;i++){
        state.push({id: i, fill: "#ECECEC"});
    }
    const circleList=state.map(x => (<circle key={x.id} cx="10" cy="10" r="10" transform={"matrix(0 1 1 0 "+position[x.id]+" 0)"} fill={x.fill}/>));

    return(
    <Container>
        <Box type={type} percent={percent}/>
        <Svg viewBox="0 0 680 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H670C675.523 0 680 4.47715 680 10V10C680 15.5228 675.523 20 670 20H10C4.47716 20 0 15.5228 0 10V10Z" fill="#C4C4C4"/>
            {circleList}
        </Svg>
    </Container>
    );
};

export default Conveyer;