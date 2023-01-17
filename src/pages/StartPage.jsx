import React from 'react';
import StartButton from '../components/home/StartButton';


function StartPage({
    handleClickTest
}){
    return (
        <div>
            <h1>StartPage</h1>
            <StartButton
            onclickTest = {handleClickTest}
            />
        </div>
    );
}



export default StartPage;