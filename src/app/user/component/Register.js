import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { constRegisteUser } from '../reducer/user.reducer';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';
import './../style/button.css';

// https://gracefullight.dev/2018/02/05/redux-form-start redux foirm 예시

const Register = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signUpFormData, setSignUpFormData] = useState('');
    const handleSignUpData = (data)=>{
        setSignUpFormData(data);
    };
    const [regist, setRegist] = useState({
        name : 'name',
    
    });
    const {name
        // , password
        // , workLocate, departmentId, workStatus, 
        // officeEmail, residentRegistrationNumber, dateOfBirth, 
        // cellPhone, externalEmail, position, grade
    } = regist;
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
    const registHandle = async (fromData) =>{
        // e.preventDefault();
        // e.stopPropagation();
        await dispatch(constRegisteUser(fromData));
        navigate('/');
    };
    const cancleButton = (e) =>{
        e.preventDefault();
        window.location = 'http://localhost:9077'
    };

    const onSaveButtonClick = (e) =>{
        e.preventDefault();

    }
    return (
        <>
        <div>
            <h1>회원가입</h1>
            <p>회원 폼을 작성해주세요</p>
            <hr/>
            <label htmlFor='name'>
                <b>이름</b>
            </label>
            
            <input type="text" name="name" value={regist.name||''} onChange={handleChange}/>

            {/* <button type='submit' onClick={(e)=>{handleSubmit(e)}}>
                회원 등록
            </button> */}
        </div>
        <RegisterForm sendToRegister={registHandle}/>
            {/* https://www.daleseo.com/material-ui-buttons/ 아이콘 정보 */}
        <Button variant="contained" color="primary" className='buttonMargin'
        onClick={registHandle}
        // startIcon={<SaveIcon/>}
        >
            Save
        </Button>
        <button type='button'  onClick={(e) =>cancleButton(e)}>
                Cancel
        </button>
    
        </>
    )
}
export default Register;