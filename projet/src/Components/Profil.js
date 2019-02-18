import React from 'react';
import ReactDOM from 'react-dom';
import './Profil.css';

class Profil extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			bgcolor: "#1e1e2f",
			colortxt: "#6699ff",
		};
	}

	 boxClick = (e) => {
    this.setState({
      bgcolor: "#6699ff",
      colortxt: "#1e1e2f"
    })
  }
  

	render(){
		return(
			<div className="Profil" style={{backgroundColor: this.state.bgcolor,color:this.state.colortxt}}>
			<img className="image" src={this.props.image}/>
			<p>{this.props.prenom} {this.props.nom}</p>
			<p>{this.props.naissance}</p>
			<button className="button" onClick={this.boxClick}>Change style</button>
			</div>
			);
	}
}

export default Profil;