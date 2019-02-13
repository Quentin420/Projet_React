import React from 'react';
import ReactDOM from 'react-dom';
import './Followers.css';

class Followers extends React.Component{
	 

	render(){
		return(
			<div className="Followers">
			<p>👍 Nombre de followers sur Twitter :</p>
			<p>{this.props.nbrfollowers}</p>
			</div>
			);
	}
}

export default Followers;