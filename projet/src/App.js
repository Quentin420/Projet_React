import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Route from './route';
import {Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Container, Row, Col} from 'reactstrap';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        bgcolor: "black",
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
              bgcolor: "#00004d",
              colored:false
      })
      }
      else{
        this.setState({
            bgcolor: "black",
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
        <Row>
        <Col xl="10" md="8" sm="7" xs="6">
        Dashboard
        </Col>
        <Col xl="2" md="4" sm="5" xs="6">
       <Button  outline color="primary" onClick={() => this.boxClick()}>
       Change Theme
       </Button>
        </Col>
        </Row>
        </header>
      </Col>
      </Row>
      <Row>
      <Col xl="1" lg="2" md="2"  className="link">
      <aside>
         <div>
            <Link className="linkCol" to="/">Home</Link>
          </div>
          <div>
            <Link className="linkCol" to="/admin">Admin</Link>
          </div>
         </aside>
      </Col>
      <Col xl="10" lg="9" md="9" sm="12" xs="12">
      <main>
       <Route/>
      </main>
      </Col>
      </Row>
        <footer style={{backgroundColor: this.state.bgcolor}}>
        Quentin Lemerle - OCRES TD2 - 2019
        </footer>
    </div>
    );
  }
}

export default App;
