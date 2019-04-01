import React from 'react';
import ReactDOM from 'react-dom';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Container, Row, Col} from 'reactstrap';
import './Chart.css';


class Chart extends React.Component{
	render () {
  	return (
      <div className="thelinechart">
        <p className="titleChart">Followers par artist</p>
    <ResponsiveContainer width="100%" height={300}>
    	<AreaChart  data={this.props.data}
            margin={{top: 10, right: 30, left: 20, bottom: 5}}>
    	}
       <XAxis dataKey="nom"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip />
       <Legend />
       <Area type="monotone" dataKey="followers" stroke="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
    );
  }
}

export default Chart;