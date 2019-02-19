import React from 'react';
import ReactDOM from 'react-dom';
import './Profil.css';

class Profil extends React.Component{
  

	render(){
		return(
			<div className="Profil" >
			<img className="image" src={this.props.image}/>
			<p>{this.props.prenom} {this.props.nom}</p>
			<p>{this.props.naissance}</p>
			</div>
			);
	}
}

export default Profil;