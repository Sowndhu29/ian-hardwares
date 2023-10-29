import React from "react";
import { Carousel } from 'antd';
import './customCarousel.css'

const CustomCarousel = (props) => {
    const { carouselData } = props;

    const contentStyle = {
        margin: 0,
        height: '60vh',
        color: '#fff',
        textAlign: 'center',
        background: '#FFFFFF',
    };

    return (
        <React.Fragment>
            <Carousel
                dotPosition="top"
                dots={{
                    className: "carousel-dots"
                }}
                autoplay
                {...props}
            >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </React.Fragment>
    )
}

export default CustomCarousel