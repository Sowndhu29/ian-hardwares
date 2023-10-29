import React from "react";
import AppContainer from "../common/appContainer/appContainer";
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

const SignUpPage = (props) => {
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
                            name="name"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                type="password"
                                placeholder="confirm password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="contact"
                        >
                            <Input placeholder="Contact No" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default SignUpPage