import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { Button, Input, Space } from "antd";

import "../assets/css/login.css"

export default function Login() {

    // state 관리
    // const URI = process.env;
    const [id, setId] = useState(""); // id input
    const [passsword, setPassword] = useState(""); // password input

    const [iconPw, setIconPw] = useState(false); // 경고 아이콘 state 
    const [cautionMsg, setCautionMsg] = useState(""); // 경고 메세지

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    useEffect(() => {
        // login 상태 확인 후 접속 상태를 보여줄지 로그인 화면을 보여줄지 결정
        checkLogin();
        // if 분기
    }, [])

    // onChange
    const onChangeID = () => {

    }

    // login status 확인
    // cookie? jwt.decode? session?
    const checkLogin = (password) => {
        return 
    };

    // 입력값에 대한 조건 확인
    // false 시 state에 의한 경고 문구 표시
    const validateLogin = () => {
        return // true/false로 리턴을 통한 login 가능 상태 확인
        
    };

    // password 입력 시 조건 충족 확인
    const onChangePassword = useCallback((e) => {
        const currentPassword = e.target.value;

        if (!validateLogin(currentPassword)) {
            // password 경고문
            // 경고 아이콘
        } else {
            // password 경고문 삭제
            // 경고 아이콘 삭제
        }

    });

    // login process 수행
    const login = () => {
        return console.log('test login');// redirect home

    };


return (
    <>
    <div className="core">
        <div>logo</div><br/>
        <div>
            <Input className="idInput" placeholder="ID를 입력하세요" onChange={onChangeID}/>
            <Input.Password
            className="pwInput"
            placeholder="비밀번호를 입력하세요"
            visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
            }}
            />
            <Button className="loginButton" type="primary" onClick={login}>login</Button>
        </div>             
    </div>
    </>
)
}