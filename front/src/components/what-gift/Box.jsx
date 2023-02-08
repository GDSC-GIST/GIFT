import React from "react";
import styled from 'styled-components';

const Svg = styled.svg`
    display: flex; 
    margin: 4px auto;
    max-width: 60px;
    @media screen and (max-width: 650px),screen and (max-height: 600px) {
        max-width: 36px; 
    }
`;
const LSvg = styled.svg`
    display: flex; 
    margin: 0px auto;
    max-width: 62px;
    @media screen and (max-width: 650px),screen and (max-height: 600px) {
        max-width: 38px; 
    }
`;

const colors=["#FF6464","#3391FF","#FFE03B","#42E870","#C69256"]

function Box({type,percent}){
    if(type===0){
        return(
        <Svg viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="60" fill="#F0D48C"/>
            <rect x="7" width="15" height="30" fill="#C69256"/>
        </Svg>
        );
    }
    else if(percent>0.75){
        return (
        <LSvg viewBox="0 0 76 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="72" height="60" fill={colors[type-1]}/>
        <rect width="76" height="20" fill={colors[type-1]}/>
        <rect width="76" height="20" fill="black" fill-opacity="0.15"/>
        </LSvg>
        );
    }
    else {
        return(
            <Svg viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="60" fill={colors[type-1]}/>
            </Svg>
        );
    }
};

export default Box;