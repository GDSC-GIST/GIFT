import React from 'react';
import { useHistory } from 'react-router-dom';

const StartButton = () => {
    const history = useHistory();

    function handleUseHistory(){
        history.push('/whatgift');
    }

    return (
        <>
            <button onClick = { handleUseHistory }>
                시작하기
            </button>
        </>
    )
}

export default StartButton;

