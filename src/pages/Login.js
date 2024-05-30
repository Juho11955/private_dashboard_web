import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

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

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };


return (
    <>
    <div className="core">
        <div>logo</div><br/>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            >
        <Form.Item
            name="username"
            rules={[
                {
                    required: true,
                    message: 'ID를 입력해주세요',
                },
            ]}
            >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: '비밀번호를 입력해주세요',
                },
            ]}
            >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            또는 <a href="">회원등록하기</a>
        </Form.Item>
        </Form>
    </div>
    </>
)
}