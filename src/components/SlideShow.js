import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './1.png'
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img1} alt='img1' />
                </div>
                <div>
                    <img src={img2} alt='img2' />
                </div>
                <div>
                    <img src={img3} alt='img3' />
                </div>
                <div>
                    <img src={img4} alt='img4' />
                </div>
                <div>
                    <img src={img5} alt='img5' />
                </div>
                <div>
                    <img src={img6} alt='img6' />
                </div>
                <div>
                    <img src={img7} alt='img7' />
                </div>
                <div>
                    <img src={img8} alt='img8' />
                </div>
            </Carousel>
        </div>
    );
}