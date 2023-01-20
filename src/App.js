import React, { useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import whatgiftPage from './pages/whatgiftPage';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';
import PreparePage from './pages/PreparePage';


function App(){

  return (
    <>
    <Switch>
      <Route exact path='/' component={StartPage}/>
      <Route path='/whatgift' component={whatgiftPage}/> 
      <Route path='/prepare' component={PreparePage}/> 
      <Route path='/result' component={ResultPage}/>    
    </Switch>
    </>
  );
}


export default App;
