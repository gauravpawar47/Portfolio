import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import SortingVisualizer from '../../img/Project1.png';
import ChatGPT from '../../img/Project2.png';
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portfolio" id='Portfolio'>
            {/* Heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Works</span>

            {/* Slider */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <Swiper
                spaceBetween={0}
                slidesPerView={2} // Adjusting to 2 for better centering
                grabCursor={true}
                className='portfolio-slider'
                >
                <SwiperSlide>
                    <a href='https://stupendous-pudding-b52096.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <img src={SortingVisualizer} alt="" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href='https://666c751019c45a914093326a--symphonious-squirrel-6ccd6d.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <img src={ChatGPT} alt="" />
                    </a>
                </SwiperSlide>

                {/* Additional slides can be added here */}
                </Swiper>
            </div>
        </div>

    )
}

export default Portfolio