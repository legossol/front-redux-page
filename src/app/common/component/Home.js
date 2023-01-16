import React from "react";
import '../style/Home.css';


const Home = () =>{
    const toLogin = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        window.location = '/login';
    }
    return(
        <>
        <div className="container">
            <h2>This is Home</h2>
        </div>
    
        <form>
                <div className="container">
                    <h1>마이 페이지</h1>
                    <hr />

                    <form>
                        <label htmlFor="artistFile">
                            <b>대표이미지</b>
                        </label>
                        <td>
                            {/* <div className="display-flex" style={{ marginBottom: '50px' }}></div> */}
                            <div>

                                <br />
                                <br />
                                <br />

                                {/* <button>upload</button>
                                <button onClick={(e) => removeImgBtn(e)}>remove</button> */}
                            </div>
                        </td>

                        <label htmlFor="artistId">
                            <b>아이디번호</b>
                        </label>

                        <label htmlFor="username">
                            <b>아이디</b>
                        </label>

                        <label htmlFor="password">
                            <b>비밀번호</b>
                        </label>
                        <input type="password" placeholder="password" name="password" />

                        <label htmlFor="name">
                            <b>이름</b>
                        </label>

                        <label htmlFor="phoneNumber">
                            <b>핸드폰번호</b>
                        </label>
                        <input type="text" placeholder="phoneNumber" name="phoneNumber"  />

                        <label htmlFor="email">
                            <b>E-mail</b>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email"  />

                        <label htmlFor="address">
                            <b>주소</b>
                        </label>
                        <input type="text" placeholder="Enter Addres" name="address" />

                        <label htmlFor="school">
                            <b>학교</b>
                        </label>
                        <input type="text" placeholder="Enter School" name="school" />

                        <label htmlFor="department">
                            <b>학과</b>
                        </label>
                        <input type="text" placeholder="Enter Department" name="department"/>

                        <button
                            type="submit"
                            className="updatebtn"
                            onClick={(e) => {
                                
                            }}
                        >
                            정보 수정
                        </button>
                    </form>

                    <div className="clearfix">
                        <button type="button" onClick={toLogin} >
                            로그인으로
                        </button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </form>
        </>
    );
}
export default Home;