import React, { Component } from 'react';
import './CardArt.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import madeIn from "../pictures/MadeIn.jpg"

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
          <img className='cardphoto' src={madeIn} />
        </Row>

        <Row>
          <Col xs={12}>
            <p className="titlecard">Made in cafe</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="textCardart">
              Réalisation de prestations à l’occasion de l'inauguration de l’entreprise "Made In Cafe"</p>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-map-marker" aria-hidden="true"></i>Draguignan</p>
            <p className="displayIcon"><i class="fa fa-paint-brush" aria-hidden="true"></i> Réalisme</p>
          </Col>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-calendar" aria-hidden="true"></i>Septembre 2018</p>
            <p className="displayIcon"><i class="fa fa-tag" aria-hidden="true"></i> BodyPainting</p>
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
