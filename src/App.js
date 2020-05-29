import React from 'react';
import './App.css';

import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import HeaderMenu from './Components/HeaderMenu.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
// import {SomeVal} from './database/state'



function App(props) {
  return (
    <BrowserRouter>
      <div>
        <HeaderMenu />
        <Route path="/firstPage" render={ () => <FirstPage addInfoWeather={props.addInfoWeather}/>} />
        <Route path="/secondPage" render={() => <SecondPage state = {props.state} />} />
        <Route path="/thirdPage" render={() => <ThirdPage  />} />
        {/* <Route path="/secondPage" component={SecondPage} /> */}
        {/* <Redirect to="/secondPage" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
