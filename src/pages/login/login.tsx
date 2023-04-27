import { Row, Col, Card, Image, Space, Timeline, Form, Checkbox, Input, Button } from "antd";
import { TbBrandVercel } from "react-icons/tb";
import { ClockCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage"
import testData from "../../staticData/user.json"
import { showNotification } from "../../components/general/notification";
import { navigator } from "../../components/general/navigator";
import { useNavigate, Navigate } from "react-router-dom";


const testTest = {
    "username": "test",
    "departman": "blabla",
    "accessToken": "blablablablabla",
    "authorization": [
        {
            "name": "Performans",
            "id": 1
        },
        {
            "name": "Personel",
            "id": 2
        },
        {
            "name": "Chat",
            "id": 3
        },
        {
            "name": "Eğitim",
            "id": 4
        },
        {
            "name": "Sertifika",
            "id": 5
        },
        {
            "name": "IK",
            "id": 6
        },
        {
            "name": "İletişim",
            "id": 7
        },
        {
            "name": "Yetkili",
            "id": 8
        }
    ]
}
const Login = (props: any) => {
    const { test1, test2, test3, test4, test5 } = useParams();
    const [user, setUser] = useLocalStorage("user", {})
    const navigate = useNavigate();


    const onFinish = (values: any) => {
        console.log(testData)
        // api call catch,then=>
        showNotification("success", "Başarılı", "Login oldunuz hoşgeldin: " + values.username, null)
        setUser(testTest)
        // navigator(navigate, "/")
    };

    const onFinishFailed = (errorInfo: any) => {
        showNotification("error", "Başarısız", "Login oldunuz", null)

    };
    return (<Card title={test1 + " " + test2 + " " + test3 + " " + test4 + " " + test5} >

        {user.accessToken && (
            <Navigate to="/" replace={true} />
        )}
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password allowClear />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 8 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 16, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    </Card>
    );
};

export default Login;