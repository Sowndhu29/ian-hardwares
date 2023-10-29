import React, { useContext } from "react";
import { Button, Space } from 'antd';
import UrlContext from "../context/urlContext";
import { useNavigate } from "react-router-dom";
import './appBanner.css'

const AppBanner = (props) => {

    const { children, landingPage } = props;
    const urls = useContext(UrlContext);
    const navigate = useNavigate();

    return (
        <div className="app-banner">
            <div
                className="title"
                onClick={() => navigate(urls.home)}
            >
                Ian Technologies and Hardwares
            </div>
            <div>
                {landingPage ? <Space>
                    <Button
                        type="text"
                        onClick={() => navigate(urls.signIn)}
                    >
                        Login
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => navigate(urls.signUp)}
                    >
                        Sign Up
                    </Button>
                </Space> : "Hi Alfred"}
            </div>
        </div>
    )
}

export default AppBanner