import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestToekn } from '../reducer/user.reducer';

const registUser = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [regist, setRegist] = useState({
        name : 'name',
        password : 'password',
        workLocate : 'workLocate',
        departmentId : 'departmentId',
        workStatus : 'workStatus',
        officeEmail : 'officeEmail',
        residentRegistrationNumber: 'residentRegistrationNumber',
        dateOfBirth : 'dateOfBirth',
        cellPhone : 'cellPhone',
        externalEmail: 'externalEmail',
        position : 'position',
        grade : 'grade'
    
    });
    const {name, password, workLocate, departmentId, workStatus, 
        officeEmail, residentRegistrationNumber, dateOfBirth, 
        cellPhone, externalEmail, position, grade} = regist;
    const handleChange = useCallback(
        e => {
            const {name, value} = e.target;
            setRegist({
                ...regist,
                [name] : value
            });
        },
        [regist]
    );
    const handleSubmit = async (e) =>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(requestToekn(regist));
        navigate('/user');
    };
    const cancleButton = (e) =>{
        e.preventDefault();
        window.location = 'http://localhost:9077'
    };
    return (
        <>
        <div>
            <h1>로그인</h1>
            <p>gonna login SSO</p>
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
export default registUser;