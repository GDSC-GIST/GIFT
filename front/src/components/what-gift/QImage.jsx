import React from 'react';
import styled from 'styled-components';
import testImg from '../../assets/result_img/test.png';

const Container = styled.div`
    text-align: center;
    font-weight: bold;
`;


export default function QImage({number}){
    return (
        <Container>
            <img src={testImg} alt='test_img' height='190'/>
        </Container>
    )
};