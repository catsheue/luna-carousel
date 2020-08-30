import React from 'react';
import './carousel.css';

const Carousel = ({children, height}) => {
    const width = children.length * 100;
    const getWidth = () => window.innerWidth;
    return (
        <div className="luna" style={{ height: height}}>
            <div className="luna__inner" style={{ width: `${width}%`}}>
                {children.map((item) => (
                    <div>{item}</div>
                ))}
            </div>

        </div>
    );
};

export default Carousel;