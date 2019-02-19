import React, { Component } from 'react';
import './Admin.css';
import {Form, FormGroup, Label, Input, Button, Container, Row, Col} from 'reactstrap';


class Admin extends Component {
  render() {
    return (
      
      <Container>
      <Form>
      <Row>
      <Col xl="4"><FormGroup >
      <Label>Nom</Label>
      <Input type="text"/>
      </FormGroup></Col>
      <Col xl="4"><FormGroup>
      <Label>Prenom</Label>
      <Input type="text"/>
      </FormGroup></Col>
      <Col xl="4"><FormGroup>
      <Label>Date de naissance</Label>
      <Input type="date"/>
      </FormGroup></Col>
      </Row>
      <Row>
      <Col><FormGroup>
      <Label>Nombre de followers Twitter</Label>
      <Input type="number"/>
      </FormGroup></Col>
      </Row>
      <Row>
      <Col>
      <Button style={{backgroundColor: "#1e1e2f"}}>Submit</Button>
      </Col>
      </Row>
      </Form>
      </Container>
    );
  }
}

export default Admin;