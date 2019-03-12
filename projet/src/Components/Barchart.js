import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './Barchart.css';


class Barchart extends React.Component{
	render () {
  	return (
    	<BarChart className="thebarchart" width={500} height={300} data={this.props.data}
            margin={{top:10, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
       <Legend />
       <Bar dataKey="pv" fill="#8884d8" />
       <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Barchart;