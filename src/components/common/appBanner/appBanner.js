import React, {useContext} from "react";
import { Button, Space } from 'antd';
import UrlContext from "../context/urlContext";
import { useNavigate } from "react-router-dom";
import './appBanner.css'

const AppBanner = (props) => {

    const { children } = props;
    const urls = useContext(UrlContext);
    const navigate = useNavigate();

    return (
        <div className="app-banner">
            <div className="title">Ian Technologies and Hardwares</div>
            <div>
                <Space>
                    <Button
                        type="text"
                        onClick={() => navigate(urls.signIn, {replace: true})}
                    >
                        Login
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => navigate(urls.signUp, {replace: true})}
                    >
                        Sign Up
                    </Button>
                </Space>
            </div>
        </div>
    )
}

export default AppBanner