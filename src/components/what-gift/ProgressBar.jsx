import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div(({ hidden }) => ({
    display : 'flex',
    margin: '5% 0 2% 0',
    height: '1em',
    backgroundColor:'gray',
    visibility: hidden ? 'hidden' : '',

}));

const Indicator = styled.div(({ precent }) => ({
    display: 'inline-block',
    height: '.25em',

    width: `${precent}%`,
    background: `linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,)`
}));

export default function ProgressBar({ hidden, precent }) {
    return(
        <Container hidden={hidden}>
            <Indicator precent={precent} />
        </Container>
    )
}