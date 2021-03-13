import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Calculadora from './components/Calculadora'
import History from './components/History'


function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Calculadora}/>
        <Route exact path="/history" component={History}/>
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
