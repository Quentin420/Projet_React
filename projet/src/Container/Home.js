import React, { Component } from 'react';
import './Home.css';
import {Container, Row, Col} from 'reactstrap';
import Profil from '../Components/Profil';
import jeanne from '../Images/jeanne.jpg';
import Followers from '../Components/Followers';
import Chart from '../Components/Chart';


const infos = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


class Home extends Component {
  render() {
    return (
    	<Container>
    	<Row>

    	<Col xl="7" className="chart"><Chart data={infos}/></Col>
    	</Row>
    	<Row>
    	<Col xl="10" className="profil"><Profil
             prenom="quentin"
             nom="lemerle"
             naissance="08/12/1996"
             image={jeanne}
             bgcolor="white"
              />
        </Col>
    	</Row>
      
      </Container>
    );
  }
}

export default Home;