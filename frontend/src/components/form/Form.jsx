import React, { Component } from 'react'
import './Form.scss'
import { Button, Input, Container, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import {formAction} from '../../stores/actions/formAction'


import {connect} from 'react-redux'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            text: '',
            address: '',
            zip: '',
            startDate: '',
            endDate: '',
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        let missingFielfds = []
        Object.keys(this.state).forEach((key) => {
            if(this.state[key] === ''){
                missingFielfds.push(key)
            }
        })
        if(missingFielfds.length > 0){
            missingFielfds.forEach((field) => {
                alert(`${field} ne doit pas être vide`)
            })
        } else {
            this.setState({
                modal: !this.state.modal
            });
            this.props.formAction(this.state)
        }
    }

    render() {
        console.log(this.props)
        return (
            <Container fluid>
                <Row>
                    <NavLink
                        className="LinkNavMobileLogo"
                        to="/fil-d-actu">
                        <i class="fas fa-arrow-left"></i>
                    </NavLink>
                </Row>
                <div className="addpicture">
                    <i class="fas fa-camera"></i>
                </div>
                <Row className="RowForm">
                    <Col xs={12}>
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg">
                        </input>
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={12}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={12}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.text} type="textarea" name="text" id="exampleText" placeholder="Description de votre projet" />
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={12}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.address} type="text" name="address" id="exampleAddress" placeholder="Adresse" />
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={6}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.zip} type="text" name="zip" id="exampleZip" placeholder="Code postal" />
                    </Col>
                    <Col xs={6}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.city} type="text" name="city" id="exampleCity" placeholder="Ville" />
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={6}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.startDate} type="date" name="startDate" max="1900-12-31" placeholder="date de début"/>
                    </Col>
                    <Col xs={6}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.endDate} type="date" name="endDate" max="1900-12-31" placeholder="date de fin"/>
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={12}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.typeArt} type="select" name="typeArt" id="exampleSelect" placeholder="Type">
                            <option value="" hidden>Type</option>
                            <option>Fresque</option>
                            <option>BodyPainting </option>
                            <option>Graffiti </option>
                        </Input>
                    </Col>
                </Row>
                <Row className="RowForm">
                    <Col xs={12}>
                        <Input onChange={(e) => this.setState({[e.target.name]: e.target.value})} value={this.state.styleArt} type="select" name="styleArt" id="exampleSelect" placeholder="Type">
                            <option value="" hidden>Style</option>
                            <option>Réalisme</option>
                            <option>Cubisme</option>
                            <option>Autre</option>
                        </Input>
                    </Col>
                </Row>
                <Button color="info" size="lg" block onClick={this.toggle}>Proposer mon appel d'offre</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <div className="descripContainer">
                            <i className="titleModal" class="fas fa-check"></i>
                            <p className="evenDescription">Merci de nous contacter</p>
                            <p className="evenSubtitle"> A bientôt !! </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                           
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
    formAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

