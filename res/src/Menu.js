import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.jpg';
import { Container, Row, Col } from 'reactstrap';

class Menu extends Component {
  render() {
    return (
        <Container>
      	    <Row className="header">
      			<Col>
      				<img src={logo} />
      			</Col>
      		</Row>	
        </Container>
    );
  }
}

export default Menu;