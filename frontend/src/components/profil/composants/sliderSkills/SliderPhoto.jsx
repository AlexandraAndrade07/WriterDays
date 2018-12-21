import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import imagStreetWD from "../../../pictures/streetWD.jpg"
import madeIn from "../../../pictures/MadeIn.jpg"
import lyon from "../../../pictures/LyonActu.png"
import deltaToi from "../../../pictures/deltaToi.JPG"
import lyonD from "../../../pictures/Lyon2.JPG"
import delta from "../../../pictures/delta.JPG"
import './SliderPhoto.scss'

export default class SliderPhoto extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <Container className="containerActualitesPhoto">

        <Row>
          <Col xs={1} className="containerTitleSlider">
            <p className="titleActualites">
              Photographie
            </p>
          </Col>

          <Col xs={11} className="containerSlider">
            <Slider {...settings}>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={deltaToi}><img src={deltaToi} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={lyon}><img src={lyon} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={imagStreetWD}><img src={imagStreetWD} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={madeIn}><img src={madeIn} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={lyonD}><img src={lyonD} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={deltaToi}><img src={deltaToi} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={lyon}><img src={lyon} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={delta}><img src={delta} /></a>
              </div>
              <div className="sliderImage">
                <a data-fancybox="gallery" href={madeIn}><img src={madeIn} /></a>
              </div>
            </Slider>
          </Col>
        </Row>
        
      </Container>
    );
  }
}