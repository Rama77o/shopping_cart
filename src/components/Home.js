import React from 'react'
import firstImg from "./images/banner4.jpeg";
import secondImg from "./images/cardImage2.jpeg";
import thirdImg from "./images/cardImage3.jpeg";
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img src={firstImg} style={{height: "84vh", width: "100%"}} alt='1'/>
      <Carousel.Caption style={{marginBottom: "200px"}}>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={secondImg} style={{height: "84vh", width: "100%"}} alt='2'/>
      <Carousel.Caption style={{marginBottom: "200px"}}>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={thirdImg} style={{height: "84vh", width: "100%"}} alt='3'/>
      <Carousel.Caption style={{marginBottom: "200px"}}>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Home