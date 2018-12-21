import React, { Component } from 'react'
import { Container } from 'reactstrap'
import imagStreetWD from "../pictures/streetWD.jpg"
import madeIn from "../pictures/MadeIn.jpg"
import lyon from "../pictures/LyonActu.png"
import deltaToi from "../pictures/deltaToi.JPG"
import lyonD from "../pictures/Lyon2.JPG"
import { NavLink } from 'react-router-dom';
import './News.scss'

export default class News extends Component {
  render() {
    return (
      <Container fluid className='ContainerFeed'>

        <div className="notification">
          <p className="notiftext">Besoin d'un projet ?</p>
          <p className="notiftext2">Contactez-nous :</p>
          <NavLink
            className="LinkNavMobileLogo"
            to="/formulaire">
            <i class="fas fa-plus-circle"></i>
          </NavLink>
        </div>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre2">
          <div className="containerActu">
            <img className="gradientImg" src={imagStreetWD} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Street WD</h2>
              <p className="description">Fresque artistique réalisé à Marseille par "Sry"</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre0">
          <div className="containerActu">
            <img className="gradientImg" src={lyon} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Lyon</h2>
              <p className="description">Fresque artistique réalisé à Marseille par "Sry"</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre1">
          <div className="containerActu">
            <img className="gradientImg" src={madeIn} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">made In</h2>
              <p className="description">Body painting"</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre3">
          <div className="containerActu">
            <img className="gradientImg" src={deltaToi} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Delta toi</h2>
              <p className="description">Fresque artistique réalisé à Marseille par "Sry"</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre2">
          <div className="containerActu">
            <img className="gradientImg" src={imagStreetWD} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Street WD</h2>
              <p className="description">Fresque artistique réalisé à Marseille par "Sry"</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre0">
          <div className="containerActu">
            <img className="gradientImg" src={lyonD} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Lyon</h2>
              <p className="description">Body painting</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre1">
          <div className="containerActu">
            <img className="gradientImg" src={madeIn} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">made In</h2>
              <p className="description">Body painting</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="LinkNavMobileLogo"
          to="/oeuvre3">
          <div className="containerActu">
            <img className="gradientImg" src={deltaToi} alt="imageStret" />
            <div className="upsideBoxtext">
              <h2 className="title">Delta toi</h2>
              <p className="description">Body painting</p>
            </div>
          </div>
        </NavLink>

      </Container>
    )
  }
}
