import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    font-weight: bold;
`;


export default function Image({height,filename}){

    return (
        <Container>
            <img src={require('../../assets/'+filename)} alt='test_img' height={height}/>
        </Container>
    )
};