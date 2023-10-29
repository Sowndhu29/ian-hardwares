import React from "react";
import CardDataMock from "../assets/mocks/homePageCards.json";
import AppContainer from "../common/appContainer/appContainer";
import LandingCards from '../common/landingCards/landingCards';
import './homePage.css';


const HomePage = (props) => {

    return (
        <React.Fragment>
            <AppContainer>
                <LandingCards
                    cardData={CardDataMock}
                    title={"Hello Alfred, Good Noon"}
                    subTitle={"Start adding your stock list , to the respective categories"}
                />
            </AppContainer>
        </React.Fragment>
    )
}

export default HomePage