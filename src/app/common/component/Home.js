import React from "react";
import '../style/Home.css';
import { FormGroup,FormControlLabel, Button } from '@mui/material'
import Switch from '@mui/material/Switch';

const Home = () =>{
    const toLogin = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        window.location = '/login';
    }
    const toSignUp = e =>{
        e.preventDefault();
        window.location = '/signUp';
    }
    return(
        <>
        <div className="container">
            <h2>This is Home</h2>
        </div>
        <br/>
        <Button type="button" href="/signUp" size="large" color="primary" variant="outlined">
            회원가입
        </Button>
        
        <br/>
        </>
    );
}
export default Home;