import React from 'react';
import ReactDOM from 'react-dom';
import './Followers.css';
import {Container, Row, Col} from 'reactstrap';

class Followers extends React.Component{
	 

	render(){
		return(
			
			<div className="Followers">
			<Container>
			<p>👍 Nombre de followers sur Twitter :</p>
			<p>{this.props.nbrfollowers}</p>
			</Container>
			</div>
			
			);
	}
}

export default Followers;