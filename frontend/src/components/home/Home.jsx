import React, { Component } from 'react';
import LOGOWD from '../pictures/LOGOWD-ConvertImage.png';
import './Home.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import BokehTovmp4 from './Background (1)/MP4/Bokeh-Tov.mp4';
import { NavLink } from 'react-router-dom';

export default class HomeWD extends Component {
  render() {
    return (
      <Container fluid>
        <div className="backgroundhome">
          <video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted">
            <source src={BokehTovmp4} type="video/mp4" />
            Video not supported
			    </video>
        </div>
        <Row>
          <Col className="centerlogowd" xs={12}>
            <img className="logoWD" src={LOGOWD} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="welcome">Bienvenue</p>
          </Col>
        </Row>
        <NavLink
          className="LinkNavMobileLogo"
          to="/a-propos">
          <Button size="lg" block>Continuer sur WriterDays</Button>
        </NavLink>
      </Container>
    )
  }
}

