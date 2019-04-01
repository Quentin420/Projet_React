import React, { Component } from 'react';
import './Home.css';
import {Container, Row, Col} from 'reactstrap';
import Profil from '../Components/Profil';
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
import axios from 'axios';






const size = {
  width: '100%',
  height: '300',
};


class Home extends Component {
constructor(props) {
    super(props);
    this.state = {
      albums:[],
      albumData: [],
      albumDataId:"5c9a71a36a8050dce76844aa",
      likeAlbum:[],
      artists:[],
      artisttop:"sardou"
      
    }
  }


componentWillMount() {
  this.fetchAlbums();
  this.fetchAlbumData();
  this.fetchLikes();
  this.fetchArtist();
}

fetchArtist = () =>
{
  axios.get('http://localhost:3001/artists')
  .then(response => {
    this.setState({artists: response.data})
  })
  .catch(error => console.log(error))
}

fetchAlbums = () => {
  axios.get('http://localhost:3001/albums')
  .then(response => {
    this.setState({albums: response.data})
  })
  .catch(error => console.log(error))
}

fetchAlbumData = () => {
    axios.get('http://localhost:3001/albums/'+ this.state.albumDataId)
  .then(response => {
    this.setState({albumData: response.data},() => {console.log(this.state.albumData.artist_id.nom)})
  })
  .catch(error => console.log(error))
  

}

fetchLikes = () => {
   axios.get('http://localhost:3001/albums/likes/count')
  .then(response => {
    this.setState({likeAlbum: response.data})
  })
  .catch(error => console.log(error))
}


setAlbum = (id,art) => {

  if(id!==this.state.albumDataId)
  {
    this.setState({
      albumDataId:id,
      artisttop:art
    },() => {this.fetchAlbumData();});
  }


}

  render() {

    return (
    <div>
    	<Row >
        <Col xl="3" lg="3" md="12" className="d-none d-md-block"><Weather /></Col>
        <Col  xl="9" lg="9" md="12" sm="12" xs="12">
          <Timer />
          <NumberList numbers={this.state.likeAlbum} CalbumId={this.setAlbum}/>
        </Col>
    

       
    	  <Col xl="6" lg="6" md="12"  className="chart d-none d-md-block">
          <Chart data={this.state.artists}/>
        </Col>

        <Col xl="6" lg="6" md="12" className="barchart d-none d-md-block">
          <Barchart nom={this.state.artisttop} data={this.state.albumData}/>
        </Col>

      <Col xl="3" lg="4" md="5" xs="12"><Notes /></Col>
      <Col xl="9" lg="8" md="7" xs="12"><ListOfTDL /></Col>
      
      <Col  lg={{ size: 8, offset: 2 }} xs="12" className="d-none d-sm-block">
        <div className="player">
         <SpotifyPlayer  uri="spotify:album:43QqlF5F3AuyBCedZAXrg3" size={size} view={'list'} theme={'black'} />
         </div>
      </Col>
      </Row>
</div>
    );
  }
}

export default Home;