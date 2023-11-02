import { SaveOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Divider } from "antd";
import React, { useEffect, useState } from "react";
import MaterialListMock from '../assets/mocks/materialList.json';
import AppContainer from "../common/appContainer/appContainer";
import CustomList from "../common/customList/customList";
import './material.css';
import MaterialForm from './materialForm';
import { useLocation } from 'react-router-dom';

const MaterialList = (props) => {

    const location = useLocation();
    const { urlData } = location.state || {};

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({})

    const handleAddClick = () => {
        setFormData({});
        setIsFormOpen(true)
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
        console.log('urlData', urlData)
    }, [urlData])

    const modalTitle = () => {
        return (
            <React.Fragment>
                <div className='modal-header'>
                    <div>
                        {urlData?.title}
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
            <AppContainer bgPrimary showCart={!urlData?.isAdmin}>
                <div className="vendor-list-container">
                    <div className="banner">
                        <div>{urlData?.title}</div>
                        {urlData?.isAdmin &&
                            <div>
                                <Button
                                    type="primary"
                                    onClick={handleAddClick}
                                >
                                    Add Item
                                </Button>
                            </div>
                        }
                    </div>
                    <div>
                        <CustomList
                            editList={urlData?.isAdmin}
                            deleteList={urlData?.isAdmin}
                            addToCart={!urlData?.isAdmin}
                            columns={MaterialListMock?.columns ?? []}
                            dataSource={MaterialListMock?.dataSource ?? []}
                            handleEditClick={handleEditClick}
                            // expandableRow={true}
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
                        <MaterialForm formData={formData} />
                    </Modal>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default MaterialList