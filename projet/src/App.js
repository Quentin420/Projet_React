import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Route from './route';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Row>
      <Col xl="12">
        <header className="header">
        <Row>
        <Col xl="1" className="projet">Dashboard</Col>
        <Col xl="10"></Col>
        <Col xl="1" className="link">
         
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Route/>
          </Col>
         
          </Row>
        </header>
        </Col>
        </Row>
        
        <footer>
        I'm a footer
        </footer>
        
        </div>
    );
  }
}

export default App;
