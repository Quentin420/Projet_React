import React from 'react';
import './VisualNumber.css'

export default class VisualNumber extends React.Component {
	constructor(props) {
		super(props);
	
	}

	render() {

		return (
			<div className="VisualNumber" >	
			<img src={this.props.logo} onClick={() => this.props.CalbumId(this.props.id,this.props.artist)}/>
				<div>
					<p className="title">{this.props.title} - {this.props.artist}</p> 
					<p className="quantity">{this.props.quantity}</p>					
				</div>
					

			</div>
		);
	}
}

