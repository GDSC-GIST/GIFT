import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    font-weight: bold;
`;

const Title = styled.span`
    fontSize: '1.5em',
`;

export default function Question({ number, question}){
    return (
        <Container>
            <Title>Q{number}</Title>
            <div>
            <p>{question}</p>
            </div>
        </Container>
    )
};