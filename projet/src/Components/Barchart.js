import React from 'react';
import ReactDOM from 'react-dom';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './Barchart.css';


class Barchart extends React.Component{
	render () {
       
  	return (
<div className="chartcontainer">
        <p className="titleChart">{this.props.data.title} - {this.props.nom}</p>
       
        <ResponsiveContainer width="100%" height={300}>
    	<BarChart  data={this.props.data.tracks}
            margin={{top:10, right: 30, left: 20, bottom: 5}} layout="vertical">
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis type='number' domain={['auto', 'auto']}/>
        <YAxis dataKey="title" type="category"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
  }
}

export default Barchart;