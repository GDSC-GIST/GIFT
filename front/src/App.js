import React, { useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import WhatgiftPage from './pages/WhatgiftPage';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';
import PreparePage from './pages/PreparePage';
import ErrorPage from './pages/ErrorPage';
import Motion from './components/what-gift/Motion';


function App(){

  return (
    <>
    <Switch>
      <Route exact path='/' component={StartPage}/>
      <Route path='/whatgift' component={WhatgiftPage}/> 
      <Route path='/prepare/:resultID' component={PreparePage}/> 
      <Route path='/result/:resultID' component={ResultPage}/>
      <Route path='/*' component={ErrorPage}/>      
    </Switch>
    </>
  );
}


export default App;
