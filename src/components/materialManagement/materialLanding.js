import { RightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardDataMock from "../assets/mocks/materialLandingCards.json";
import AppContainer from "../common/appContainer/appContainer";
import UrlContext from "../common/context/urlContext";
import './material.css';
import LandingCards from '../common/landingCards/landingCards';

const { Meta } = Card;

const MaterialLanding = (props) => {

    return (
        <React.Fragment>
            <AppContainer>
                <LandingCards
                    cardData={CardDataMock}
                    title={"Material Catalog"}
                    subTitle={""}
                />
            </AppContainer>

        </React.Fragment>
    )
};

export default MaterialLanding;