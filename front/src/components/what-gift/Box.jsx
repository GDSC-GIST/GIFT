import React from "react";
import styled from 'styled-components';

const Svg = styled.svg`
    display: flex; 
    margin: 0px auto;
    max-width: 72px;
    @media screen and (max-width: 650px) {
        max-width: 36px; 
    }
`;

const colors=["#FF6464","#3391FF","#FFE03B","#42E870","#C69256"]

function Box({type}){
    if(type===0){
        return(
        <Svg viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="60" fill="#F0D48C"/>
            <rect x="7" width="15" height="30" fill="#C69256"/>
        </Svg>
        );
    }
    else{
        return(
            <Svg viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="60" fill={colors[type-1]}/>
            </Svg>
        );
    }
};

export default Box;