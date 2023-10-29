import React from "react";
import AppContainer from "../common/appContainer/appContainer";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const formLayout = {
    labelAlign: 'left',
    // labelCol: { span: 3 },
    wrapperCol: { span: 22, offset: 1 },
    labelWrap: true,
    style: {
        width: '300px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}
const SignInPage = (props) => {
    return (
        <React.Fragment>
            <AppContainer>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Form
                        colon={false}
                        // initialValues={formData}
                        preserve={false}
                        {...formLayout}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default SignInPage