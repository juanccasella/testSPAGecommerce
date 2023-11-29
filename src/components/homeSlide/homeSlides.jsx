import React, { useState, useEffect } from 'react';
import './homeSlides.css'; 
import { Link } from 'react-router-dom';
import slide1 from "../../assets/images/slides/slide1.jpg";
import slide2 from "../../assets/images/slides/slide2.jpg";
import slide3 from "../../assets/images/slides/slide3.jpg";

const Slides = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const showSlides = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(showSlides, 5000);
        return () => clearInterval(interval);
    }, []);

    const slides = [
        slide1,
        slide2,
        slide3,
    ];

    return (
        <div className="slides">
            {slides.map((image, index) => (
                <div key={index} className={`slide ${index === slideIndex ? 'active' : ''}`}>
                    <Link to={'/products'} className="slideLink">
                        <img src={image} alt={`Slide ${index + 1}`} />
                        <div className="slideTexto">Conoce nuestros productos</div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Slides;