import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Routes, BrowserRouter } from 'react-router-dom';
import { Login, Register ,DetailRegister, UserInfo} from './app/user';
import { Home,SideBar } from './app/common';
import { BoardList } from './app/board';

const App = () =>{
  return (
    <Routes>
      <Route exact path ="/" element ={<Home/>}/>
      <Route exact path ="/signUp" element ={<Register/>}/>
      <Route exact path='/sideBarCheck' component={<SideBar/>}/>
      <Route exact path="/login" element ={<Login/>}/>
      <Route exact path='/register' element ={<Register/>}/>
      <Route exact path='/register/detail' element ={<DetailRegister/>}/>
      <Route exact path='/myinfo/:id' element={<UserInfo/>}/>
      <Route exact path='/board' element={<BoardList/>}/>
    </Routes>
  );
}

export default App;
