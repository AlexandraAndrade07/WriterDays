import React, { Component } from 'react';
import './CardArt.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import bodypainting1 from './bodypainting1.jpg';
import { NavLink } from 'react-router-dom';
import imagStreetWD from "../pictures/streetWD.jpg"

export default class CardArt extends Component {
  render() {
    return (
      <Container fluid>

        <Row>
          <NavLink
            className="LinkNavMobileLogo"
            to="/fil-d-actu">
            <i class="fas fa-arrow-left"></i>
          </NavLink>
        </Row>

        <Row>
          <img className='cardphoto' src={imagStreetWD} />
        </Row>

        <Row>
          <Col xs={12}>
            <p className="titlecard">street WD</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="textCardart">
              Réalisation de Graffitis sur le mur d’une maison, à la demande du propriétaire</p>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-map-marker" aria-hidden="true"></i>Marseille</p>
            <p className="displayIcon"><i class="fa fa-paint-brush" aria-hidden="true"></i>Graffiti</p>
          </Col>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-calendar" aria-hidden="true"></i>Mars 2018</p>
            <p className="displayIcon"><i class="fa fa-tag" aria-hidden="true"></i>Fresque mural</p>
          </Col>
        </Row>

        <NavLink
          className="LinkNavMobileLogo"
          to="/profil">
          <Button color="info" size="lg" block>Voir l'artiste</Button>
        </NavLink>
        
      </Container>
    )
  }
}
