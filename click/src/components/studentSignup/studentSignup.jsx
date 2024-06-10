import "../../styles/Signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

  
function StudentSignup() {
    const navigate = useNavigate();

    const [passwordCheck, setPasswordCheck] = useState("");
    const [signupData, setSignupData] = useState({
        name:"",
        classNumber:"", //학반은 number로 보내는게 좋아보입니다 -전해림-
        userId:"", //usreId는 number로 보내는게 좋아보입니다 -전해림-
        password:"",
    })

    const handleSignupChange = (e) => {
        const {value,name} = e.target
        setSignupData((prev) => ({...prev,[name]:value}))
    }

    const onClickIdCheck = () => {
        //서버 api 필요
      alert("이미있는 비밀번호")
    }

    const onClickSignup = () => {
        if(passwordCheck !== signupData.password){
            alert("비밀번호를 다시 입력해주세요")
        }else{
            alert("회원가입 성공")
            navigate("/studentmain")
            //서버로직
        }
    }

    
    return(
        <div className="signup">
            <h2 className="text">회원가입</h2>
            <p><span>*</span> 이름</p>
            <input type='text' placeholder="이름" className="input" onChange={handleSignupChange} id="name" name="name"/><br/>
            <p><span>*</span> 학반</p>
            <input type='text' placeholder="학반" className="input" onChange={handleSignupChange} id="classNumber" name="classNumber"/><br/>
            <p><span>*</span> 아이디</p>
            <input type="text" placeholder="아이디" className="input inputId" onChange={handleSignupChange} id="userId" name="userId"/>
            <button type="submit" name="IdCheck" className="IdCheck" onClick={onClickIdCheck}>중복확인</button><br />
            <p><span>*</span> 비밀번호</p>
            <input type="password" placeholder="비밀번호" className="input" onChange={handleSignupChange} id="password" name="password"/><br />
            <p><span>*</span> 비밀번호 확인</p>
            <input type="password" placeholder="비밀번호 확인" className="input" onChange={(e) => setPasswordCheck(e.target.value)}/><br />
            <button type="submit" className="Signupbtn"
            onClick={onClickSignup}
            >회원가입</button>
            <h6 className="tip" onClick={() =>  navigate("/login")}>이미 회원가입을 진행 하셨나요?</h6>
        </div>
    );
}

export default StudentSignup;