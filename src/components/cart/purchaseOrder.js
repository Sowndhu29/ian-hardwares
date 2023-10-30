import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Modal, Space, Col, Row, Card } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import AppContainer from "../common/appContainer/appContainer";
import { useNavigate } from "react-router-dom";
import UrlContext from '../common/context/urlContext';
import "./cart.css";

const PurchaseOrder = (props) => {

    const location = useLocation();
    const urls = useContext(UrlContext);
    const navigate = useNavigate();
    const stateData = location.state;

    return (
        <React.Fragment>
            <AppContainer bgPrimary>
                <div className="vendor-list-container">
                    <div className="banner">
                        <div>Order - 123</div>
                        <div>
                            <Space>
                                <Button
                                    type="text"
                                    onClick={() => navigate({ pathname: urls.home })}
                                >
                                    Cancel Order
                                </Button>
                                <Button
                                    type="primary"

                                >
                                    Get PDF
                                </Button>
                            </Space>
                        </div>
                    </div>
                    <div>
                        <Row gutter={[16, 16]} justify={'start'} align={'middle'}>
                            <Col
                                xs={{ span: 24 }} lg={{ span: 20 }}
                            >
                                <Card>
                                    {/* <Meta
                                        title={"Vendor 1 Quotation"}
                                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                    />
                                    <div className="card-action">
                                        <div>
                                            {"read more"}
                                        </div>
                                    </div> */}
                                    <h2>Vendor 1 Quotation</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Read More</p>
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 3 }}>
                                <Button
                                    type="text"
                                // onClick={() => navigate({ pathname: urls.home })}
                                >
                                    Generate Vendor Quotation
                                </Button>
                            </Col>
                            <Col
                                xs={{ span: 24 }} lg={{ span: 20 }}
                            >
                                <Card>
                                    {/* <Meta
                                        title={"Vendor 1 Quotation"}
                                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                    />
                                    <div className="card-action">
                                        <div>
                                            {"read more"}
                                        </div>
                                    </div> */}
                                    <h2>Vendor 2 Quotation</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Read More</p>
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 3 }}>
                                <Button
                                    type="text"
                                // onClick={() => navigate({ pathname: urls.home })}
                                >
                                    Generate Vendor Quotation
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </AppContainer>
        </React.Fragment>
    )
}

export default PurchaseOrder