import { Form, Input, InputNumber } from 'antd';
import React from "react";

const { TextArea } = Input;

const formLayout = {
    labelAlign: 'left',
    labelCol: { span: 3 },
    wrapperCol: { span: 19, offset: 1 },
    labelWrap: true
}

const CartForm = (props) => {
    const { formData } = props
    return (
        <React.Fragment>
            <Form
                colon={false}
                initialValues={formData}
                preserve={false}
                {...formLayout}
            >
                <Form.Item
                    label="Part No"
                    name="partNo"
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
                    label="Part Name"
                    name="partName"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price/Unit"
                    name="pricePu"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="MOQ"
                    name="moq"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Box Price"
                    name="boxPrice"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Std Disc"
                    name="stdDisc"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Final Disc"
                    name="finalDisc"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Quantity"
                    name="quantity"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Total Price"
                    name="totalPrice"
                >
                    <Input />
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default CartForm