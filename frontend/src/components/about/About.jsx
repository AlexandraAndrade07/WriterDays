import React, { Component } from 'react'
import './About.scss'
import wdgraph from '../pictures/wdgraph.jpg'
import { NavLink } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Container fluid>
            <NavLink
              className="LinkNavMobileLogo"
              to="/home">
              <i class="fas fa-arrow-left"></i>
            </NavLink>
        <Row>
          <img className='cardphoto' src={wdgraph} />
        </Row>
        <Row>
          <Col xs={12}>
            <p className="titlecard">A propos de nous</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="textabout">
              WRITER DAY est une nouvelle plateforme numérique unique favorisant l’expression des street artists et le partage de leur passion ; permettant ainsi de casser les codes, offrir de la visibilité et créer une nouvelle définition du street art.<br></br>
              Writer Day est une entreprise ayant pour ambition la création de projets artistiques au cœur de l'urbanisme, dans le but de mettre la créativité des artistes de la région au service de l'initiation artistique par l'intégration d'œuvres d'arts dans le quotidien des habitants.<br></br>
              Pour y remédier, quoi de mieux que d'introduire dans les rues, les gares, les bâtiments des chefs d'œuvres uniques et en harmonies avec le territoire ?
              </p>
          </Col>
        </Row>
        <NavLink
          className="LinkNavMobileLogo"
          to="/fil-d-actu">
        <Button color="info" size="lg" block>Voir le fil d'actualité</Button>
        </NavLink>
      </Container>
    )
  }
}
