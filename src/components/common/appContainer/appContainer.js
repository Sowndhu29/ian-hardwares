import React from "react";
import AppBanner from "../appBanner/appBanner";
import './appContainer.css';

const AppContainer = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <div className="app-banner-layout">
                <AppBanner />
            </div>
            <div className="app-page-layout">
                {children}
            </div>
        </React.Fragment>
    )
}

export default AppContainer