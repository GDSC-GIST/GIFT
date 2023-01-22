import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div(({ hidden }) => ({
    display : 'flex',
    margin: '5% 0 0 0',
    height: '1em',
    backgroundColor:'#ececec',
    visibility: hidden ? 'hidden' : '',

}));

const Indicator = styled.div(({ percent }) => ({
    display: 'inline-block',
    height: '.25em',

    width: `${percent}%`,
    background: `linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,)`
}));

export default function ProgressBar({ hidden, percent }) {
    return(
        <Container hidden={hidden}>
            <Indicator percent={percent} />
        </Container>
    )
}