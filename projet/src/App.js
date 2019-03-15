import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Route from './route';
import {Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Container, Row, Col} from 'reactstrap';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        bgcolor: "#FFC8B2",
        colored:true
      };
    }

toggle(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}

boxClick(){
      if(this.state.colored==true){
        this.setState({
              bgcolor: "#BA603D",
              colored:false
      })
      }
      else{
        this.setState({
            bgcolor: "#FFC8B2",
            colored:true
        })
      }
}

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.bgcolor}}>
      <Row>
      <Col xl="12">
        <header style={{backgroundColor: this.state.bgcolor}}>
        <Row className="no-gutters">
        <Col className="dash" xl="10" md="8" sm="12" xs="12">
        Dashboard
        </Col>

        <Col xl="2" md="4" className="d-none d-md-block">
       <Button   outline color="primary" onClick={() => this.boxClick()}>
       Change Theme
       </Button>
        </Col>
        </Row>
        </header>
      </Col>
      </Row>
      <Row className="no-gutters">
      <Col xl="1" lg="2" md="2" sm="12" xs="12" className="link">
      <aside>
         <div>
            <Link className="linkCol" to="/">Home</Link>
          </div>
          <div>
            <Link className="linkCol" to="/admin">Admin</Link>
          </div>
         </aside>
      </Col>
      <Col xl="11" lg="10" md="10" sm="12" xs="12">
      <main>
      <Container>
       <Route/>
       </Container>
      </main>
      </Col>
      </Row>
        <footer style={{backgroundColor: this.state.bgcolor}}>
        Hugo Fridlansky & Quentin Lemerle - OCRES TD2 - 2019
        </footer>
    </div>
    );
  }
}

export default App;
