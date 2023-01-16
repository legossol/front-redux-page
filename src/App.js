import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './app/user';
import { Home } from './app/common';

const App = () =>{
  return (
    <Routes>
      <Route exact path ="/" element ={<Home/>}/>
      <Route exact path="/login" element ={<Login/>}/>
    </Routes>
  );
}

export default App;
