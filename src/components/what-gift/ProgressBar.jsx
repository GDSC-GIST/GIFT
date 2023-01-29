import React, {useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height : .5em;
    background: #ECECEC;
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    margin-top : 5%;
    width: 100%;
`;

const Filler = styled.div`
    display : inline-block;
    height: .5em;
    width : ${props => props.percent}%;
    background: #959595;
`;

export default function ProgressBar({hidden, percent}) {

    return(
        <Container hidden ={hidden}>
            <Filler percent={percent} />
        </Container>

    );
}