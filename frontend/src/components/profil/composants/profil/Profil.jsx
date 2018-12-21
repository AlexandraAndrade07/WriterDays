import React, { Component } from 'react'
import artistImg from '../../../pictures/artistImage.JPG'
import SliderRealiste from '../sliderSkills/SliderRealiste'
import './Profil.scss'
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SliderPhoto from '../sliderSkills/SliderPhoto';

export default class extends Component {
  render() {
    return (
      <Container fluid className="containerPortafolio">

        <Row>
          <NavLink
            className="LinkNavMobileLogo"
            to="/fil-d-actu">
            <i class="fas fa-arrow-left"></i>
          </NavLink>
        </Row>

        <Row>
          <Col className="containerProfil" xs={12}>
            <img className="artisteImage" src={artistImg} alt="imageProfil" />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h1 className="nameArtist"> Mew2 </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="ubicationArtist">
              <i class="fas fa-map-marker-alt"></i> Marseille, France
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="artistDescription">
              statut de Street-artiste
              expérience: réalisant des prestations de body-painting, live painting, des toiles,
              Je réalise aussi des exposition , ainsi que des œuvres sur toiles.
            </p>
          </Col>
        </Row>

        <Row className="skills">
          <Col xs={6}>
            <p className="displayIcon"><i class="fas fa-paint-brush "></i>Calligraphie</p>
            <p className="displayIcon"><i class="fas fa-paint-brush "></i>Réalisme</p>
          </Col>
          <Col xs={6}>
            <p className="displayIcon"><i class="fas fa-spray-can "></i>Graffiti</p>
            <p className="displayIcon"><i class="far fa-image"></i>Photographie</p>
          </Col>
        </Row>

        <Row className="sliderSkills">
          <SliderRealiste />
          <SliderPhoto />
        </Row>

      </Container>
    )
  }
}
