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
            margin={{top:10, right: 20, left: 30, bottom: 5}} layout="vertical">
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis xAxisId="top" orientation="top" type='number' domain={['auto', 'auto']} />
        <XAxis xAxisId="bottom" orientation="bottom" type='number' domain={['auto', 'auto']}/>
        
        <YAxis dataKey="title" type="category" />
        <Tooltip />
        <Legend />
        <Bar xAxisId="bottom" dataKey="likes" fill="#8884d8" />
        <Bar xAxisId="top"  dataKey="listenings" fill="#273A6D"  />
       
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
  }
}

export default Barchart;