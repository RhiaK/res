import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
        <Container>
      		<Row className="header">
      			<Col>	
      				<h1>Eatery</h1>
      			</Col>
      		</Row>	
        </Container>
    );
  }
}

export default Header;