import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import { connect } from 'react-redux';
import HomeWD from '../components/home/Home'
import About from '../components/about/About'
import Form from '../components/form/Form'
import Profil from '../components/profil/composants/profil/Profil'
import News from '../components/news/News'
import CardArt from '../components/cardart/CardArt'
import CardArt1 from '../components/cardart/CardArt1'
import CardArt2 from '../components/cardart/CardArt2'
import CardArt3 from '../components/cardart/CardArt3'

class PublicRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeWD}/>
        <Route exact path="/a-propos" component={About}/>
        <Route exact path="/formulaire" component={Form}/>
        <Route exact path="/oeuvre0" component={CardArt}/>
        <Route exact path="/oeuvre1" component={CardArt1}/>
        <Route exact path="/oeuvre2" component={CardArt2}/>
        <Route exact path="/oeuvre3" component={CardArt3}/>
        <Route exact path="/fil-d-actu" component={News}/>
        <Route exact path="/profil" component={Profil} />

      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicRouter));