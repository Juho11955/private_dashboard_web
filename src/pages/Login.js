import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Switch, Modal } from 'antd';

// URL
// const backIp = process.env.REACT_APP_API_URL;

// hook
import useInput from '../hooks/useInput';

// util
import hashing from "../utils/hashing";

//css
import 'antd-button-color/dist/css/style.css';
import "../assets/css/login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {

    // state input use hook
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    // antd form control
    const [form] = Form.useForm();

    // util 선언
    const navigate = useNavigate();

    // * login 상태 확인
    useEffect(() => {
        // login 상태 확인 후 접속 상태를 보여줄지 로그인 화면을 보여줄지 결정
        checkLogin();
        // if 분기
    }, [])

    // * login status 확인
    // cookie? jwt.decode? session?
    const checkLogin = (password) => {
        return 
    };

    // * validate 
    // id 유효성 검사
    const validateId = useCallback((_, value) => {
        if (!value) {
          return Promise.reject(new Error('ID는 필수 항목입니다.'));
        }
        if (/\s/.test(value)) {
          return Promise.reject(new Error('ID는 공백을 포함 할 수 없습니다.'));
        }
    
        let nicknameLength = 0;
        for (let i = 0; i < value.length; i += 1) {
          const char = value.charAt(i);
          if (escape(char).length > 4) {
            nicknameLength += 2;
          } else {
            nicknameLength += 1;
          }
        }
        if (nicknameLength < 2 || nicknameLength >= 20) {
          return Promise.reject(new Error('ID는 한글1~10자, 영문 및 숫자 2~20자까지 입력가능합니다.'));
        }
        const regExp = /[^a-zA-Z0-9가-힣_]/;
        if (regExp.test(value)) {
          return Promise.reject(new Error('ID는 한글, 영문, 숫자, _ 만 사용할 수 있습니다.'));
        }
        return Promise.resolve();
    }, []);

    // password 유효성 검사
    const validatePassword = useCallback((_, value) => {
        const regExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{8,50}$/;
        if (!value) {
            return Promise.reject(new Error('비밀번호는 필수 항목입니다.'));
        }
        if (!regExp.test(value)) {
            return Promise.reject(new Error('비밀번호는 8~50자이며 영문 소문자, 영문 대문자, 숫자, 특수문자를 모두 포함해야 합니다.'));
        }
        return Promise.resolve();
    }, []);

    // * 로그인 요청
    // 버튼을 누르면 validation이 완료된 후에 실행
    const onSubmitForm = useCallback((form) => {

        // 비밀번호 암호화
        // salt는 이후 env 파일로 빼는 작업 진행
        const salt = 'apple';
        const hash = hashing(form.password, salt);
        form.password = hash;

        // react-create에서 crypto 관련 애러로 사용불가 블로그 등에서 찾은 방법들 시도해보았지만 해결불가
        // const hash = SHA256(password, key).toString();
        
        axios.post("/members", { form })
        .catch((e) => {
            console.error(e);
        })
        .then((response) => {
            if (response.status === 200) {
            Modal.success({
                title: '로그인이 완료되었습니다.',
                onOk() {
                Switch.push('/Dashboard');
                },
            });
            }
        });
    }, []);

    // sign-up modal
    const modalSignup = () => {
        console.log("test");
        
        // test api
        axios.get("/members")
        .catch((e) => {
            console.log("error");
            console.error(e);
        })
        // test end

        navigate('/Dashboard');
    };

return (
    <>
    <div className="head"></div>
    <div className="contents">
        <div className="core">
            <div className="logo">logo</div><br/>
            <Form
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onSubmitForm}
                form={form}
                >
                <Form.Item
                    name="id"
                    rules={[{ validator: validateId }]}
                    >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="ID를 입력하세요" 
                        onChange={onChangeId}
                        />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ validator: validatePassword }]}
                    >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={onChangePassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    로그인
                    </Button>
                    또는 <span className="signup" onClick={modalSignup}>회원등록하기</span>
                </Form.Item>
            </Form>
        </div>
    </div>
    </>
)
}