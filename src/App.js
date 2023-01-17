import React from 'react';
import { Switch, Route} from 'react-router-dom';
import whatgiftPage from './pages/whatgiftPage';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';


function App(){
  return (
    <>
    <Switch>
      <Route exact path='/' component={StartPage}/>
      <Route path='/whatgift' component={whatgiftPage}/>  
      <Route path='/result' component={ResultPage}/>    
    </Switch>
    </>
  );
}


export default App;
