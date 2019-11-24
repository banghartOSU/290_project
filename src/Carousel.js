import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MetMuseum from './MetMuseum.js'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
            <Link to='/metmuseum'>
                <img
                    className="d-block w-100"
                     src={require("./images/themet.jpg")}
                        alt="First slide"
                    />
            </Link>
                <Carousel.Caption>
                    <h3 style={{color:"black"}}>Explore the Met's collection!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Link to='/article'>
                <img
                    className="d-block w-100"
                    src={require('./images/maze.jpg')}
                    alt="Article"
                />
            </Link>
                <Carousel.Caption>
                    <h3 style={{color:"black"}}>Object-Oriented Ontology in Archaeology</h3>
                    <p style={{color:"black"}}>More detail than anyone cared to know!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/corporate'>
                <img
                    className="d-block w-100"
                    src={require('./images/math.jpg')}
                    alt="Numbers API"
                />
                 </Link>
                <Carousel.Caption>
                        <h3 style={{ color: "white" }}>Corporate jive</h3>
                        <p style={{ color: "white" }}>Fun with random number facts</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default ControlledCarousel;