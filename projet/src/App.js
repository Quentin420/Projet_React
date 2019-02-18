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
        <header>
        Dashboard
        </header>
      </Col>
      </Row>

      <Row>
      <Col xl="1" lg="2" md="3" sm="4" xs="5" className="link">
      <aside>
         <div>
            <Link className="linkCol" to="/">Home</Link>
          </div>
          <div>
            <Link className="linkCol" to="/admin">Admin</Link>
          </div>
         </aside>
      </Col>
      <Col xl="10" lg="9" md="8" sm="7" xs="6">
      <main>
       <Route/>
      </main>
      </Col>
      </Row>
        
        <footer>
        Quentin Lemerle - OCRES TD2 - 2019
        </footer>
        
        </div>
    );
  }
}

export default App;
