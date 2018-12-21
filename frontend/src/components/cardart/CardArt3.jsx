import React, { Component } from 'react';
import './CardArt.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import deltaToi from "../pictures/deltaToi.JPG"

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
          <img className='cardphoto' src={deltaToi} />
        </Row>

        <Row>
          <Col xs={12}>
            <p className="titlecard">delta toil</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="textCardart">
              Réalisation d’une toile durant le Delta Destival</p>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-map-marker" aria-hidden="true"></i>Marseille</p>
            <p className="displayIcon"><i class="fa fa-paint-brush" aria-hidden="true"></i>Abstrait</p>
          </Col>

          <Col xs={6}>
            <p className="displayIcon"><i class="fa fa-calendar" aria-hidden="true"></i>Juin 2018</p>
            <p className="displayIcon"><i class="fa fa-tag" aria-hidden="true"></i>Peinture sur toile</p>
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
