import React from "react";
import AppBanner from "../appBanner/appBanner";
import './appContainer.css';

const AppContainer = (props) => {
    const { children, bgPrimary, landingPage, showCart } = props;
    return (
        <React.Fragment>
            <div className="app-banner-layout">
                <AppBanner landingPage={landingPage} showCart={showCart}/>
            </div>
            <div 
            className="app-page-layout"
            style={{backgroundColor: props?.bgPrimary ? '#FFFFFF' : '#F2F2F2'}}
            >
                {children}
            </div>
        </React.Fragment>
    )
}

export default AppContainer