import React, { Component } from 'react';
import './Home.css';
import {Container, Row, Col} from 'reactstrap';
import Profil from '../Components/Profil';
import jeanne from '../Images/jeanne.jpg';
import Followers from '../Components/Followers';
import Chart from '../Components/Chart';
import Barchart from '../Components/Barchart';
import Weather from '../Components/Weather';
import SpotifyPlayer from 'react-spotify-player';
import Timer from '../Components/Timer';
import Note from '../Components/Note';
import Notes from '../Container/Notes';
import ToDo from '../Components/ToDo';
import TodoList from '../Container/TodoList';
import ListOfTDL from '../Container/ListOfTDL';
import VisualNumber from '../Components/VisualNumber';
import NumberList from '../Container/NumberList';



const infos = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
     
];

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
   
];

const numbers=[{logo:require("../icons/number.png"), title:"amis Facebook", quantity:"5400"},
{logo:require("../icons/computer.png"), title:"Followers Twitter", quantity:"43400"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan fb", quantity:"29393"},
{logo:require("../icons/number.png"), title:"Fan rap", quantity:"239399"},
{logo:require("../icons/number.png"), title:"Fan incontestable", quantity:"-2399"},



]

const size = {
  width: '100%',
  height: '300',
};


class Home extends Component {

  render() {
    return (
    	<Container>
    	<Row >
        <Col xl="3"><Weather /></Col>
        <Col xl="9" >
          <Timer />
          <NumberList numbers={numbers}/>
        </Col>
    

       
    	  <Col xl="6" className="chart">
          <Chart data={infos}/>
        </Col>

        <Col xl="6" className="barchart">
          <Barchart data={data}/>
        </Col>

      <Col xl="3"><Notes /></Col>
      <Col xl="9"><ListOfTDL /></Col>
      </Row>
      <Row>
     
      </Row>
      <Row>
      <Col xl="7" className="player">
        <SpotifyPlayer uri="spotify:album:43QqlF5F3AuyBCedZAXrg3" size={size} view={'list'} theme={'black'} />
      </Col>
      <Col xl="4" className="profil"><Profil
             prenom="Jeanne"
             nom="Test"
             naissance="08/12/1996"
             image={jeanne}
              />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Home;