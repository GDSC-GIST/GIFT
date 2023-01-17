import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
    padding: '.5em',
    textAlign: 'center',
    fontWeight: 'bold',
});

const Title = styled.span({
    fontSize: '1.5em',
});

export default function Question({ title, question}){
    return (
        <Container>
            <Title>{title}</Title>
            <div>
            <p>{question}</p>
            </div>
        </Container>
    )
};