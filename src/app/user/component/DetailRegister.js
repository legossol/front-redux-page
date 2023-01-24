import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { constDetailRegisteUser } from '../reducer/user.reducer';

const DetailRegister = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [regist, setRegist] = useState({
        name : 'name',
        // workLocate : 'workLocate',
        // departmentId : 'departmentId',
        // workStatus : 'workStatus',
        // officeEmail : 'officeEmail',
        // residentRegistrationNumber: 'residentRegistrationNumber',
        dateOfBirth : 'dateOfBirth',
        // cellPhone : 'cellPhone',
        externalEmail: 'externalEmail',
        // position : 'position',
        // grade : 'grade'
    
    });
    const {name, externalEmail, dateOfBirth
        // , password
        // , workLocate, departmentId, workStatus, 
        //  residentRegistrationNumber, 
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
    const handleSubmit = async (e) =>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(constDetailRegisteUser(regist));
        navigate('/register/detail');
    };
    const cancleButton = (e) =>{
        e.preventDefault();
        window.location = 'http://localhost:3000'
    };
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
            
            <label htmlFor='externalEmail'>
                <b>이메일</b>
            </label>
            <input type="test" name="externalEmail" value={regist.externalEmail || ''} onChange={handleChange}/>
            
            <label htmlFor='dateOfBirth'>
                <b>생년월일</b>
            </label>
            <input type="test" name="dateOfBirth" value={regist.dateOfBirth || ''} onChange={handleChange}/>

            <button type='submit' onClick={(e)=>{handleSubmit(e)}}>
                회원 등록
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
export default DetailRegister;