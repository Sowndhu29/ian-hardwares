import { Button, Col, Row } from 'antd';
import React, { useContext } from "react";
import AppContainer from "../common/appContainer/appContainer";
import UrlContext from "../common/context/urlContext";
import { useNavigate } from "react-router-dom";
import './landingPage.css';

const LandingPage = (props) => {

    const urls = useContext(UrlContext);
    const navigate = useNavigate();

    return (
        <AppContainer>
            <div className="landing-page">
                <Row className="rows">
                    <Col
                        xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}
                    >
                        <div className="content">
                            <div>
                                <h1>Your Best Value Proposition</h1>
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div>
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={() => navigate(urls.signIn, {replace: true})}
                                >
                                    Start Exploring
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
                        <div className="carousel"></div>
                    </Col>
                </Row>
            </div>
        </AppContainer>
    )
}

export default LandingPage