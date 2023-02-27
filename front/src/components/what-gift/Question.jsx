import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 10px;
    padding: 0 5%;
    @media screen and (max-width: 650px),screen and (max-height: 600px) {
        margin-top: 32px; 
    }
`;

const Title = styled.span`
    font-size: 1.2em;
    -webkit-text-stroke: 0.2px black;
`;
const P = styled.p`
    margin-top: 0.5em;
    margin-bottom:16px;
`;

export default function Question({ number, question}){
    return (
        <Container>
            <Title>Q{number}</Title>
            <P>{question}</P>
        </Container>
    )
};