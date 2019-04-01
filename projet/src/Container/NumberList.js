import React from 'react';
import VisualNumber from '../Components/VisualNumber'
import './NumberList.css'

export default class NumberList extends React.Component {
	

	render() {

		
		return (

			<div className="numbers">
				{this.props.numbers.map((number) =>
					<VisualNumber key={number._id} id={number._id} logo={number.cover_url} title={number.title} artist={number.artist } quantity={number.likes} CalbumId={this.props.CalbumId} />
				)}
			</div>
		);
	}
}


