import React, { Component } from 'react';
import './Admin.css';
import {Table, Form, FormGroup,FormControl, Label, Input, Button, Container, Row, Col} from 'reactstrap';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
     artistsList:[{nom:"michou",_id:13352},
                      {nom:"marion",_id:4},
                      {nom:"paul",_id:433},
                      {nom:"patrique",_id:765}],
    albumList:[{title:"zouk",_id:13352},
                      {title:"zouk&oooo",_id:4},
                      {title:"rap trap",_id:433},
                      {title:"michou de michou",_id:765}],
    ArtistAddName:"",
    ArtistAddBirth:"",
    ArtistAddFollowers:"",
    ArtistUpdateNameValue:"",
    ArtistUpdateFollowersValue:"",
    ArtistDeleteNameValue:"",
    AlbumAddTitle:"",
    AlbumAddRelease:"",
    AlbumAddCoverUrl:"",
    AlbumAddArtist:"",
    AlbumDeleteTitle:"",
    TrackAddTitle:"",
    TrackAddDuration:"",
    TrackAddListenings:"",
    TrackAddLikes:"",
    TrackAddAlbum:"",
    TrackDeleteTitleValue:"",
    TrackUpdateListeningsTitle:"",
    TrackUpdateListeningsNew:"",
    TrackUpdateLikesTitle:"",
    TrackUpdateLikesNew:"",
    }
  }

  //add handler
handleArtistaddNameChange(event) {
    this.setState({ArtistAddName: event.target.value});
  }
handleArtistAddBirthChange(event) {
    this.setState({ArtistAddBirth: event.target.value});
  }
handleArtistAddFollowersChange(event) {
    this.setState({ArtistAddFollowers: event.target.value});
  }

AddArtist = () => 
{
    console.log(this.state.ArtistAddName)
}



  //update handler
 handleArtistUpdateChange(event) {
    this.setState({ArtistUpdateNameValue: event.target.value});
  }
 handleArtistUpdateFollowersChange(event) {
    this.setState({ArtistUpdateFollowersValue: event.target.value});
  }

    //Delete handler
 handleArtistDeleteChange(event) {
    this.setState({ArtistDeleteNameValue: event.target.value});
  }


UpdateArtist = () => 
{
   console.log(this.state.ArtistUpdateNameValue)
}


  //add album handler
handleAlbumAddTitleChange(event) {
    this.setState({AlbumAddTitle: event.target.value});
  }
handleAlbumAddReleaseChange(event) {
    this.setState({AlbumAddRelease: event.target.value});
  }
handleAlbumAddCoverChange(event) {
    this.setState({AlbumAddCoverUrl: event.target.value});
  }
handleAlbumAddArtitChange(event) {
    this.setState({AlbumAddArtist: event.target.value});
  }


  //delete Album
  handleAlbumDeleteChange(event){
    this.setState({AlbumDeleteTitle: event.target.value});
  }



//Add Track 
handleTrackAddTitleChange(event){
   this.setState({TrackAddTitle: event.target.value});
}

handleTrackAddDurationChange(event){
 this.setState({TrackAddDuration: event.target.value});
}

handleTrackAddListeningsChange(event){
 this.setState({TrackAddListenings: event.target.value});
}

handleTrackAddLikesChange(event){
 this.setState({TrackAddLikes: event.target.value});
}

handleTrackAddAlbumChange(event){
   this.setState({TrackAddAlbum: event.target.value});
}


  render() {
    return (
      <Container>

      <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Add Artist</h3>
            </thead>
            <tbody>
            <Row>
          
              <Col> 
              <Input type="text" value={this.state.ArtistAddName} onChange={this.handleArtistaddNameChange.bind(this)} placeholder="Artist Name"/>
              </Col>
              <Col>
               <Input type="text" value={this.state.ArtistAddBirth} onChange={this.handleArtistAddBirthChange.bind(this)} placeholder="Birth date __/__/__"/>
              </Col>
              <Col>
                <Input type="text" value={this.state.ArtistAddFollowers} onChange={this.handleArtistAddFollowersChange.bind(this)} placeholder="actual amount of followers"/>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}} onClick={() => this.AddArtist()}>On add ma poule !</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>




        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Artists uptade</h3>
            </thead>
            <tbody>
            <Row>
              <Col>
               <select value={this.state.ArtistUpdateNameValue} onChange={this.handleArtistUpdateChange.bind(this)}>
                    <option value="" disabled selected>Artist to update</option>
                    {this.state.artistsList.map((artist) => <option value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col>Edit followers amount :</Col>
              <Col>
                <Input type="text" value={this.state.ArtistUpdateFollowersValue} onChange={this.handleArtistUpdateFollowersChange.bind(this)} placeholder="new amount"/>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}} onClick={() => this.UpdateArtist()}>On update ma poule !</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>


        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Delete Artist</h3>
            </thead>
            <tbody>
            <Row>
              <Col>
               <select value={this.state.ArtistDeleteNameValue} onChange={this.handleArtistDeleteChange.bind(this)}>
                   <option value="" disabled selected>Artist to delete</option>
                    {this.state.artistsList.map((artist) => <option value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}}>On update ma poule !</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>


        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Album add</h3>
            </thead>
            <tbody>
            <Row>
          
              <Col> 
              <Input type="text" value={this.state.AlbumAddTitle} onChange={this.handleAlbumAddTitleChange.bind(this)} placeholder="Album title"/>
              </Col>
              <Col>
               <Input type="text" value={this.state.AlbumAddRelease} onChange={this.handleAlbumAddReleaseChange.bind(this)} placeholder="Release date __/__/__"/>
              </Col>
              <Col>
                <Input type="text" value={this.state.AlbumAddCoverUrl} onChange={this.handleAlbumAddCoverChange.bind(this)} placeholder="Cover Url"/>
              </Col>
               <Col>
               <select value={this.state.AlbumAddArtist} onChange={this.handleAlbumAddArtitChange.bind(this)}>
                    <option value="" disabled selected>Artist of the album</option>
                    {this.state.artistsList.map((artist) => <option value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}}>On add ma poule !</Button>
              </Col>

            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>


        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Delete Album</h3>
            </thead>
            <tbody>
            <Row>
              <Col>
               <select value={this.state.AlbumDeleteTitle} onChange={this.handleAlbumDeleteChange.bind(this)}>
                    <option value="" disabled selected>Album to delete</option>
                    {this.state.albumList.map((Album) => <option value={Album._id}>{Album.title}</option>)}
                   </select>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}}>On update ma poule !</Button>
            </Col>
            </Row>
            </tbody>
          </Table>
          </Row>
        </Form>

        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Add Track</h3>
            </thead>
            <tbody>
            <Row>
          
              <Col> 
              <Input type="text" value={this.state.TrackAddTitle} onChange={this.handleTrackAddTitleChange.bind(this)} placeholder="Track Title.."/>
              </Col>
              <Col>
               <Input type="text" value={this.state.TrackAddDuration} onChange={this.handleTrackAddDurationChange.bind(this)} placeholder="Track duration: min.sec "/>
              </Col>
              <Col>
                <Input type="text" value={this.state.TrackAddListenings} onChange={this.handleTrackAddListeningsChange.bind(this)} placeholder="Listenings.."/>
              </Col>
              <Col>
                <Input type="text" value={this.state.TrackAddLikes} onChange={this.handleTrackAddLikesChange.bind(this)} placeholder="Likes..."/>
              </Col>
              <Col>
               <select value={this.state.TrackAddAlbum} onChange={this.handleTrackAddAlbumChange.bind(this)}>
                    
                  <option value="" disabled selected>album of the track</option>
                    {this.state.albumList.map((Album) => <option value={Album._id}>{Album.title}</option>)}
                   </select>
              </Col>
              <Col>
               <Button style={{backgroundColor: "#1e1e2f"}} onClick={() => this.AddArtist()}>On add !</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>

      </Container>
    );
  }
}
export default Admin;