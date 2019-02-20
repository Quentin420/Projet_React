import React, { Component } from 'react';
import './Admin.css';
import {Table, Form, FormGroup, Label, Input, Button, Container, Row, Col} from 'reactstrap';


class Admin extends Component {
  render() {
    return (
      <Container>
        <Form>
        <Row className="infos">
          <Col xl="4">
            <FormGroup >
              <Label>Nom</Label>
              <Input type="text"/>
            </FormGroup>
          </Col>
          <Col xl="4">
            <FormGroup>
              <Label>Prenom</Label>
              <Input type="text"/>
            </FormGroup>
          </Col>
          <Col xl="4">
            <FormGroup>
              <Label>Date de naissance</Label>
              <Input type="date"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button style={{backgroundColor: "#1e1e2f"}}>Submit</Button>
          </Col>
        </Row>
        <br/>
        <Row className="follower">
          <Col>
            <FormGroup>
              <Label>Nombre de followers Twitter</Label>
              <Input type="number"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button style={{backgroundColor: "#1e1e2f"}}>Submit</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Table>
            <thead className="tab">
              <tr>
                <th>Année</th>
                <th>Nombre moyen de like par publication</th>
                <th>Nombre moyen de commentaire par publication</th>
              </tr>
            </thead>
            <tbody className="tab">
              <tr>
                <th scope="row">2019</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2018</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2017</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2016</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2015</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2014</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2013</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col>
            <Button style={{backgroundColor: "#1e1e2f"}}>Submit</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Table>
            <thead className="tab">
              <tr>
                <th>Année</th>
                <th>Nombre d'abonnés</th>
                <th>Nombre de publication</th>
              </tr>
            </thead>
            <tbody className="tab">
              <tr>
                <th scope="row">2019</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2018</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2017</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2016</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2015</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2014</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
              <tr>
                <th scope="row">2013</th>
                <td><Input type="number"/></td>
                <td><Input type="number"/></td>
              </tr>
            </tbody>
          </Table>
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