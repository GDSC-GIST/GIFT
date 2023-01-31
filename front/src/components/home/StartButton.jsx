import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 1rem 2.5rem;
    text-align: center;

    height: 86px;
    width: 286px;
    font-size: 1rem;

    background : #ff6464;
    color: white;
    margin : 0 auto;

    font-family: 'Gowun Dodum', sans-serif;

`;


const StartButton = () => {
    const history = useHistory();

    function handleUseHistory(){
        history.push('/whatgift');
    }

    return (
        <>
            <Button onClick = { handleUseHistory }>
                선물 고르러 가기 
            </Button>
        </>
    )
}

export default StartButton;

