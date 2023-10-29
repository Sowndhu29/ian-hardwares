import { SaveOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Divider } from "antd";
import React, { useState } from "react";
import vendorListMock from '../assets/mocks/vendorList.json';
import AppContainer from "../common/appContainer/appContainer";
import CustomList from "../common/customList/customList";
import './vendor.css';
import VendorForm from './vendorForm';

const VendorList = (props) => {
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

    const modalTitle = () => {
        return (
            <React.Fragment>
                <div className='modal-header'>
                    <div>
                        Vendor
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
                        <div>Vendors</div>
                        <div>
                            <Button
                                type="primary"
                                onClick={handleAddClick}
                            >
                                Add Vendor
                            </Button>
                        </div>
                    </div>
                    <div>
                        <CustomList
                            editList={true}
                            deleteList={true}
                            columns={vendorListMock?.columns ?? []}
                            dataSource={vendorListMock?.dataSource ?? []}
                            handleEditClick={handleEditClick}
                            expandableRow={true}
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
                        <VendorForm formData={formData} />
                    </Modal>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default VendorList