import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestToekn } from '../reducer/user.reducer';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = useState({
        code: 'code',
        client_id: 'chatting-service',
        client_secret: 'mhD6l6PPsyTAwddUhjFYDPFjkc0wTYfn',
        grant_type: 'client_credentials',
        username: '',
        password: ''
    });

    const { username, password} = login;
    const handleChange = useCallback( 
        (e) =>{
            const {name, value} = e.target;
            setLogin({
                ...login,
                [name]: value
            });
    },
    [login]
    );
    const handleSubmit = async (e) =>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(requestToekn(login));
        navigate('/');
    };
    const cancleButton = (e) =>{
        e.preventDefault();
        window.location = 'http://umestory.jhssol.kro.kr:3088'
    };
    return (
        <>
        <div>
            <h1>로그인</h1>
            <hr/>
            <label htmlFor='username'>
                <b>아이디</b>
            </label>
            <input type="text" name="username" value={login.username || ''} onChange={handleChange}/>
            <label htmlFor='password'>
                <b>비번</b>
            </label>
            <input type="test" name="password" value={login.password || ''} onChange={handleChange}/>

            <button type='submit' onClick={(e)=>{handleSubmit(e)}}>
                Log in
            </button>
        </div>
        <div>
            
            <button type='button' onClick={(e) =>cancleButton(e)}>
                Cancel
            </button>
        </div>
        </>
    )
}
export default Login;