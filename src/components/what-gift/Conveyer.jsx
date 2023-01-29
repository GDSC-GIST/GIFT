import React from "react";
import styled from 'styled-components';
import { ReactComponent as TypeBox } from "../../styles/openBox.svg";
import { ReactComponent as DefaultBox } from "../../styles/defaultBox.svg";
const Svg = styled.svg`
    display: flex;
    height : 1em;
    margin: -5px auto;
`;

const Container=styled.div`
    margin-top:70px;
    text-align: center;
`;


const position=[40,93,146,199,252,305,358,411,464,517,570,623];
const colors=["#FF6464","#3391FF","#FFE03B","#42E870","#C69256"]

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
    const ellipseList=state.map(x => (<ellipse key={x.id} cx="10" cy="10" rx="10" ry="10" transform={"matrix(-4.37114e-08 1 1 4.37114e-08 "+position[x.id]+" 0)"} fill={x.fill}/>));
    
    let box;
    if(type===0){
        box=(<DefaultBox></DefaultBox>);
    }else{
        box=(<TypeBox fill={colors[type-1]}></TypeBox>);
    }

    return(
    <Container>
        {box}
    <Svg width="680" height="20" viewBox="0 0 680 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10C0 4.47715 4.47715 0 10 0H670C675.523 0 680 4.47715 680 10V10C680 15.5228 675.523 20 670 20H10C4.47716 20 0 15.5228 0 10V10Z" fill="#C4C4C4"/>
        {ellipseList}
        </Svg>
        </Container>
    );
};

export default Conveyer;