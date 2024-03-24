import React, {useState,useCallback} from "react";
import '../style/RegisForm.css';
import { FormGroup,FormControlLabel, Button, IconButton } from '@mui/material'
import Switch from '@mui/material/Switch';




const RegisterForm = ({sendToRegister}) =>{
    const sendForm  = useCallback(e => {
        sendToRegister(signup);
    })
    const [signup, setSignup] = useState({
        userId: '',
        password: '',
        username: '',
        phoneNumber: '',
        email: ''
    });

    const { userId, password, username, phoneNumber, email } = signup;
    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setSignup({
                ...signup,
                [name]: value,
            });
        },
        [signup]
    );
    return (
        <>
         <form 
        //  onSubmit={sendToRegister(signup)}
         >
                <div>
                    <h1>Home</h1>
                    <hr />

                    <form>
                        {/* <label htmlFor="artistFile">
                            <b>대표이미지</b>
                        </label> */}
                        <br />

                        <label htmlFor="userId">
                            <b>아이디</b>
                        </label>
                        <input type="userId" placeholder="계정 ID"name="userId" value={userId} onChange={handleChange}/>

                        <br />
                        <label htmlFor="password">
                            <b>비밀번호</b>
                        </label>
                        <input type="password" placeholder="비밀번호" name="password" value={password} onChange={handleChange}/>

                        <br />
                        <label htmlFor="username">
                            <b>이름</b>
                        </label>
                        <input type="username" placeholder="이름" name="username" value={username} onChange={handleChange}/>
                        <br />
                        <label htmlFor="phoneNumber">
                            <b>핸드폰번호</b>
                        </label>
                        <input type="text" placeholder="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange}/>

                        <br />
                        <label htmlFor="email">
                            <b>E-mail</b>
                        </label>
                        <input type="text" placeholder="이메일을 입력해주세요" name="email" value={email} onChange={handleChange}/>
                        <br />

                        <FormGroup>
                        <FormControlLabel required control={<Switch/>}label="Required"/>
                        </FormGroup>
                        
                        <Button variant="contained" color="primary" className='buttonMargin'
                        onClick={sendForm}
                        // startIcon={<SaveIcon/>}
                        ></Button>
                    </form>


                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </form>
        </>
    );
}

export default RegisterForm;