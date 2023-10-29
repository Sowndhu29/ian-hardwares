import { Form, Input, InputNumber } from 'antd';
import React from "react";

const { TextArea } = Input;

const formLayout = {
    labelAlign: 'left',
    labelCol: { span: 3 },
    wrapperCol: { span: 19, offset: 1 },
    labelWrap: true
}

const VendorForm = (props) => {
    const { formData } = props
    return (
        <React.Fragment>
            {console.log('formData', formData)}
            <Form
                colon={false}
                initialValues={formData}
                preserve={false}
                {...formLayout}
            >
                <Form.Item
                    label="Vendor No"
                    name="vendorId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contact No"
                    name="contact"
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                >
                    <TextArea />
                </Form.Item>
                <Form.Item
                    label="Area"
                    name="area"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="GST No"
                    name="gst"
                >
                    <Input />
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default VendorForm