import { RightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UrlContext from "../context/urlContext";
import './landingCards.css';

const { Meta } = Card;

const LandingCards = (props) => {

    const urls = useContext(UrlContext);
    const navigate = useNavigate();
    const cardData = props?.cardData;

    const handleNavigate = (item) =>{
        const path = item?.isList ? (urls[item?.pageId] + `/${item?.title}`) : (urls[item?.pageId] ?? urls?.home)
        return navigate(path, {state: {urlData: item}})
    }

    return (
        <React.Fragment>
            <div className="landing-cards">
                <div className="heading">
                    <div>
                        <h1>
                            {props?.title}
                        </h1>
                    </div>
                    <div>
                        {props?.subTitle}
                    </div>
                </div>
                <div className="cards">
                    <Row gutter={[16, 16]} justify={'center'} align={'middle'}>
                        {cardData.map((item, index) => (
                            <Col xs={24} sm={12} lg={6} key={index}>
                                <Card
                                    className="card"
                                    hoverable
                                    cover={<div />}
                                    onClick={() => handleNavigate(item)}
                                >
                                    <Meta
                                        title={item?.title}
                                        description={item?.content}
                                    />
                                    <div className="card-action">
                                        <div>
                                            {item?.actionText}
                                        </div>
                                        <div>
                                            <RightOutlined />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandingCards