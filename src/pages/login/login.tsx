import { Row, Col, Card, Image, Space, Timeline, Form, Checkbox, Input, Button } from "antd";
import { TbBrandVercel } from "react-icons/tb";
import { ClockCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage"



const Login = (props: any) => {
    const { test1, test2, test3, test4, test5 } = useParams();
    const [user, setUser] = useLocalStorage("user", {})

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (<Card title={test1 + " " + test2 + " " + test3 + " " + test4 + " " + test5} >
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