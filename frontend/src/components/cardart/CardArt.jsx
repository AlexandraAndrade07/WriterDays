import React, { Component } from 'react';
import './CardArt.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import lyon from "../pictures/LyonActu.png"

export default class CardArt extends Component {
  render() {
    return (
      <Container fluid>

        <NavLink
          className="LinkNavMobileLogo"
          to="/fil-d-actu">
          <i class="fas fa-arrow-left"></i>
        </NavLink>

        <Row>
          <img className='cardphoto' src={lyon} />
        </Row>
        <Row>
          <Col xs={12}>
            <p className="titlecard">EM Lyon</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="textCardart">
            Réalisation des logos des associations de la Lyon business School pour la journée d'intégration 
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-map-marker" aria-hidden="true"></i>Lyon</p>
            <p className="displayIcon"><i class="fa fa-paint-brush" aria-hidden="true"></i> Réalisme</p>
          </Col>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-calendar" aria-hidden="true"></i>Août 2018</p>
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
