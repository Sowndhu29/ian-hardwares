import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Modal, Space } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import CartListMock from "../assets/mocks/cartList.json";
import AppContainer from "../common/appContainer/appContainer";
import CustomList from "../common/customList/customList";
import "./cart.css";
import CartForm from "./cartForm";
import { useNavigate } from "react-router-dom";
import UrlContext from '../common/context/urlContext';

const CartList = (props) => {

    const location = useLocation();
    const urls = useContext(UrlContext);
    const navigate = useNavigate();
    const stateData = location.state;

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handlePlaceOrderClick = () => {
        // setFormData({});
        // setIsFormOpen(true)
    }

    const handleEditClick = (record) => {
        setFormData(record);
        setIsFormOpen(true)
    }

    const handleSave = (data, type) => {
        console.log('type', type)
    }

    const handleCancel = () => {
        setIsFormOpen(false);
        setFormData({})
    }

    useEffect(() => {
        console.log('stateData', stateData)
    }, [stateData])

    const modalTitle = () => {
        return (
            <React.Fragment>
                <div className='modal-header'>
                    <div>
                        Edit Cart
                    </div>
                    <div>
                        <Space>
                            <Button key="cancel" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button
                                key="submit"
                                type="primary"
                                onClick={() => { }}
                                icon={<SaveOutlined />}
                            >
                                Save
                            </Button>
                        </Space>
                    </div>
                </div>
                <Divider style={{ position: 'absolute', left: 0, margin: '10px 0' }} />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <AppContainer bgPrimary>
                <div className="vendor-list-container">
                    <div className="banner">
                        <div>View Cart</div>
                        <div>
                            <Space>
                                <Button type="text">
                                    Clear Cart
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => navigate({ pathname: urls.order })}
                                >
                                    Place Order
                                </Button>
                            </Space>
                        </div>
                    </div>
                    <div>
                        <CustomList
                            editList={true}
                            deleteList={true}
                            columns={CartListMock?.columns ?? []}
                            dataSource={CartListMock?.dataSource ?? []}
                            handleEditClick={handleEditClick}
                            expandableRow={false}
                            tableProps={{
                                scroll: {
                                    x: '100%',
                                    y: '65vh',
                                },
                                size: 'small',
                                tableLayout: 'fixed',
                                scrollToFirstRowOnChange: true,
                                column: {
                                    ellipsis: true
                                }
                            }}
                        />
                    </div>
                    <Modal
                        wrapClassName='modal'
                        title={modalTitle()}
                        open={isFormOpen}
                        footer={null}
                        keyboard
                        maskClosable={false}
                        closeIcon={null}
                        width={'70vw'}
                        style={{
                            top: '2rem',
                            maxHeight: '90vh',
                            overflow: 'hidden'
                        }}
                        destroyOnClose
                    >
                        <CartForm formData={formData} />
                    </Modal>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default CartList;