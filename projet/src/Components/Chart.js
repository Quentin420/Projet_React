import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Container, Row, Col} from 'reactstrap';
import './Chart.css';


class Chart extends React.Component{
	render () {
  	return (
    
    	<LineChart className="thelinechart" width={500} height={300} data={this.props.data}
            margin={{top: 10, right: 30, left: 20, bottom: 5}}>
    	}
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
     
    );
  }
}

export default Chart;