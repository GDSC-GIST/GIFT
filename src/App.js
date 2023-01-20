import React from 'react';
import { Switch, Route} from 'react-router-dom';
import WhatgiftPage from './pages/WhatgiftPage';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';


function App(){
  return (
    <>
    <Switch>
      <Route exact path='/' component={StartPage}/>
      <Route path='/whatgift' component={WhatgiftPage}/>  
      <Route path='/result' component={ResultPage}/>    
    </Switch>
    </>
  );
}


export default App;
