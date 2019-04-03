import React, { Component } from 'react';
import './Admin.css';
import {Table, Form, FormGroup,FormControl, Label, Input, Button, Container, Row, Col,UncontrolledAlert} from 'reactstrap';
import axios from 'axios';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    artistsList:[],
    albumList:[],
    trackList:[],
    ArtistAddName:"",
    ArtistAddBirth:"",
    ArtistAddFollowers:"",
    ArtistUpdateNameValue:"",
    ArtistUpdateFollowersValue:"",
    ArtistDeleteNameValue:"",
    AlbumAddTitle:"",
    AlbumAddRelease:"",
    AlbumAddCoverUrl:"",
    AlbumAddGenre:"",
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


componentWillMount() {
  this.fetchAlbumList();
  this.fetchArtistList();
  this.fetchTrackList();

}




fetchArtistList = () => {
   axios.get('http://localhost:3001/artists')
  .then(response => {
    this.setState({artistsList: response.data})
  })
  .catch(error => console.log(error))
}

fetchTrackList = () => {
   axios.get('http://localhost:3001/Tracks')
  .then(response => {
    this.setState({trackList: response.data})
  })
  .catch(error => console.log(error))
}



  fetchAlbumList = () => {
   axios.get('http://localhost:3001/albums')
  .then(response => {
    this.setState({albumList: response.data})
  })
  .catch(error => console.log(error))
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

    if(this.state.ArtistAddName!=="" && this.state.ArtistAddBirth!=="" && this.state.ArtistAddFollowers!=="")
    {

      axios.put('http://localhost:3001/Artists', {nom:this.state.ArtistAddName,birth:this.state.ArtistAddBirth,followers:this.state.ArtistAddFollowers})
        .then(response => {
          alert('Artist ajouter avec succes !')
          this.fetchArtistList();
          this.setState({ ArtistAddBirth:"", ArtistAddFollowers:"", ArtistAddName:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}



UpdateArtist = () =>
{

  const id = this.state.ArtistUpdateNameValue;
    if(this.state.ArtistUpdateNameValue!=="" && this.state.ArtistUpdateFollowersValue!=="")
    {

      axios.post('http://localhost:3001/artists/' + id, {followers:this.state.ArtistUpdateFollowersValue})
        .then(response => {
          alert('Artist modifier avec succes !')
          
          this.setState({ArtistUpdateFollowersValue:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}

DeleteArtist = () =>
{
    if(this.state.ArtistDeleteNameValue!=="")
    {

      axios.delete('http://localhost:3001/artists/' + this.state.ArtistDeleteNameValue)
        .then(response => {
          alert('Artist supprimer avec succes !')
          this.fetchArtistList();
          this.setState({ArtistDeleteNameValue:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}



AddAlbum = () =>
{
   if(this.state.AlbumAddTitle!=="" && this.state.AlbumAddRelease!=="" && this.state.AlbumAddCoverUrl!=="" && this.state.AlbumAddGenre!=="" && this.state.AlbumAddArtist!=="")
    {

      axios.put('http://localhost:3001/Albums/',{
        title:this.state.AlbumAddTitle,
        release:this.state.AlbumAddRelease,
        cover_url:this.state.AlbumAddCoverUrl,
        genre:this.state.AlbumAddGenre,
        artist_id:this.state.AlbumAddArtist
      })
        .then(response => {
          alert('Album ajouté avec succes !')
          this.fetchAlbumList();
          this.setState({AlbumAddTitle:"",
            AlbumAddRelease:"",
            AlbumAddCoverUrl:"",
            AlbumAddGenre:"",
            AlbumAddArtist:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}


DeleteAlbum = () =>
{
   if(this.state.AlbumDeleteTitle!=="")
    {

      axios.delete('http://localhost:3001/albums/' + this.state.AlbumDeleteTitle)
        .then(response => {
          alert('Album supprimer avec succes !')
          this.fetchAlbumList();
          this.setState({AlbumDeleteTitle:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }
}

AddTrack = () =>
{
   if(this.state.TrackAddTitle!=="" && this.state.TrackAddLikes!=="" && this.state.TrackAddDuration!=="" && this.state.TrackAddListenings!=="" && this.state.TrackAddAlbum!=="")
    {

      axios.put('http://localhost:3001/Tracks',{
        title:this.state.TrackAddTitle,
        duration:this.state.TrackAddDuration,
        listenings:this.state.TrackAddListenings,
        likes:this.state.TrackAddLikes,
        albumId:this.state.TrackAddAlbum
      })
        .then(response => {
          alert('Track ajouté avec succes !')
          this.fetchTrackList();
          this.setState({
            TrackAddTitle:"",
            TrackAddAlbum:"",
            TrackAddDuration:"",
            TrackAddListenings:"",
            TrackAddLikes:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}



DeleteTrack= () =>
{
   if(this.state.TrackDeleteTitleValue!=="")
    {

      axios.delete('http://localhost:3001/Tracks/' + this.state.TrackDeleteTitleValue)
        .then(response => {
          alert('track supprimer avec succes !')
          this.fetchTrackList();
          this.setState({TrackDeleteTitleValue:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }
}




UpdateLikeTrack = () =>
{

    if(this.state.TrackUpdateLikesTitle!=="" && this.state.TrackUpdateLikesNew!=="")
    {

      axios.post('http://localhost:3001/Tracks/likes/' + this.state.TrackUpdateLikesTitle , {likes:this.state.TrackUpdateLikesNew})
        .then(response => {
          alert('track likes modifier avec succes !')
          this.fetchTrackList();
          this.setState({TrackUpdateLikesTitle:"",TrackUpdateLikesNew:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

}


UpdateListeningsTrack = () =>
{

    if(this.state.TrackUpdateListeningsTitle!=="" && this.state.TrackUpdateListeningsNew!=="")
    {

      axios.post('http://localhost:3001/Tracks/listenings/' + this.state.TrackUpdateListeningsTitle , {listenings:this.state.TrackUpdateListeningsNew})
        .then(response => {
          alert('track listenings modifier avec succes !')
          this.fetchTrackList();
          this.setState({TrackUpdateListeningsTitle:"", TrackUpdateListeningsNew:""});
          
          })
       .catch(error => console.log(error))
    }
    else
    {
     alert('missing info !');
    }

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
handleAlbumAddArtistChange(event) {
    this.setState({AlbumAddArtist: event.target.value});
  }

handleAlbumAddGenreChange(event) {
  this.setState({AlbumAddGenre: event.target.value});
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

//delete track
handlerTrackDeleteChange(event){
  this.setState({TrackDeleteTitleValue: event.target.value});
}


//update track 

handleTracUpdateLikesTitleChange(event){
  this.setState({TrackUpdateLikesTitle: event.target.value});
}

handleTrackUpdateLikesNewChange(event){
  this.setState({TrackUpdateLikesNew: event.target.value});
}

handleTracUpdateListeningsTitleChange(event){
  this.setState({TrackUpdateListeningsTitle: event.target.value});
}

handleTrackUpdateListeningsNewChange(event){
  this.setState({TrackUpdateListeningsNew: event.target.value});
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
              <Col xs="12" md="6" lg="3"> 
                <Input type="text" value={this.state.ArtistAddName} onChange={this.handleArtistaddNameChange.bind(this)} placeholder="Artist Name" require />
              </Col>
              <Col xs="12" md="6" lg="3">
               <Input type="text" value={this.state.ArtistAddBirth} onChange={this.handleArtistAddBirthChange.bind(this)} placeholder="Birth date __/__/__" require/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Input type="number" value={this.state.ArtistAddFollowers} onChange={this.handleArtistAddFollowersChange.bind(this)} placeholder="actual amount of followers" require/>
              </Col>
              <Col xs="12" md="6" lg="3">
               <Button style={{backgroundColor: "#6699ff"}} onClick={() => this.AddArtist()}>Ajouter l'artiste </Button>
              </Col>
            </Row>           
            </tbody>
          </Table>
          </Row>
        </Form>
        <hr/>



        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Artists uptade</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="4">
               <select value={this.state.ArtistUpdateNameValue} onChange={this.handleArtistUpdateChange.bind(this)}>
                    <option value="" disabled selected>Artist to update</option>
                    {this.state.artistsList.map((artist,id) => <option key={id} value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col  xs="12" md="4">
                <Input type="number" value={this.state.ArtistUpdateFollowersValue} onChange={this.handleArtistUpdateFollowersChange.bind(this)} placeholder="new amount of followers"/>
              </Col>
              <Col  xs="12" md="4">

               <Button style={{backgroundColor: "#6699ff"}} onClick={() => this.UpdateArtist()}>Update l'artiste</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>

<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Delete Artist</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="6">
               <select value={this.state.ArtistDeleteNameValue} onChange={this.handleArtistDeleteChange.bind(this)}>
                   <option value="" disabled selected>Artist to delete</option>
                    {this.state.artistsList.map((artist) => <option value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="6">
               <Button style={{backgroundColor: "#6699ff"}} onClick={() => this.DeleteArtist()}>Delete Artist</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>
<hr/>

        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Album add</h3>
            </thead>
            <tbody>
            <Row>
          
              <Col xs="12" md="4" lg="2"> 
              <Input type="text" value={this.state.AlbumAddTitle} onChange={this.handleAlbumAddTitleChange.bind(this)} placeholder="Album title"/>
              </Col>
              <Col xs="12" md="4" lg="2">
               <Input type="text" value={this.state.AlbumAddRelease} onChange={this.handleAlbumAddReleaseChange.bind(this)} placeholder="Release date __/__/__"/>
              </Col>
              <Col xs="12" md="4" lg="2">
                <Input type="text" value={this.state.AlbumAddCoverUrl} onChange={this.handleAlbumAddCoverChange.bind(this)} placeholder="Cover Url"/>
              </Col>
              <Col xs="12" md="4" lg="2">
                <Input type="text" value={this.state.AlbumAddGenre} onChange={this.handleAlbumAddGenreChange.bind(this)} placeholder="Genre"/>
              </Col>
               <Col xs="12" md="4" lg="2">
               <select value={this.state.AlbumAddArtist} onChange={this.handleAlbumAddArtistChange.bind(this)}>
                    <option value="" disabled selected>Artist of the album</option>
                    {this.state.artistsList.map((artist) => <option value={artist._id}>{artist.nom}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="4" lg="2">
               <Button style={{backgroundColor: "#6699ff"}} onClick={() => this.AddAlbum()} >Ajouter album</Button>
              </Col>

            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>

<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Delete Album</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="6">
               <select value={this.state.AlbumDeleteTitle} onChange={this.handleAlbumDeleteChange.bind(this)}>
                    <option value="" disabled selected>Album to delete</option>
                    {this.state.albumList.map((Album) => <option value={Album._id}>{Album.title}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="6">
               <Button style={{backgroundColor: "#6699ff"}} onClick={()=> this.DeleteAlbum()}>Supprimer album</Button>
            </Col>
            </Row>
            </tbody>
          </Table>
          </Row>
        </Form>
<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Add Track</h3>
            </thead>
            <tbody>
            <Row>
          
              <Col xs="12" md="4" lg="2"> 
              <Input type="text" value={this.state.TrackAddTitle} onChange={this.handleTrackAddTitleChange.bind(this)} placeholder="Track Title.."/>
              </Col>
              <Col xs="12" md="4" lg="2">
               <Input type="number" value={this.state.TrackAddDuration} onChange={this.handleTrackAddDurationChange.bind(this)} placeholder="duration: min.sec "/>
              </Col>
              <Col xs="12" md="4" lg="2">
                <Input type="number" value={this.state.TrackAddListenings} onChange={this.handleTrackAddListeningsChange.bind(this)} placeholder="Listenings.."/>
              </Col>
              <Col xs="12" md="4" lg="2">
                <Input type="number" value={this.state.TrackAddLikes} onChange={this.handleTrackAddLikesChange.bind(this)} placeholder="Likes..."/>
              </Col>
              <Col xs="12" md="4" lg="2">
               <select value={this.state.TrackAddAlbum} onChange={this.handleTrackAddAlbumChange.bind(this)}>
                    
                  <option value="" disabled selected>album of the track</option>
                    {this.state.albumList.map((Album) => <option value={Album._id}>{Album.title}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="4" lg="2">
               <Button style={{backgroundColor: "#6699ff"}} onClick={()=> this.AddTrack() } >ajouter morceau</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>

<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Delete Track</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="6">
               <select value={this.state.TrackDeleteTitleValue} onChange={this.handlerTrackDeleteChange.bind(this)}>
                    <option value="" disabled selected>Track to delete</option>
                    {this.state.trackList.map((track) => <option value={track._id}>{track.title}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="6">
               <Button style={{backgroundColor: "#6699ff"}} onClick={() => this.DeleteTrack()}>Supprimer morceau</Button>
            </Col>
            </Row>
            </tbody>
          </Table>
          </Row>
        </Form>


<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Track uptade likes</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="4">
               <select value={this.state.TrackUpdateLikesTitle} onChange={this.handleTracUpdateLikesTitleChange.bind(this)}>
                    <option value="" disabled selected>Track to update</option>
                    {this.state.trackList.map((track) => <option value={track._id}>{track.title}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="4">
                <Input type="text" value={this.state.TrackUpdateLikesNew} onChange={this.handleTrackUpdateLikesNewChange.bind(this)} placeholder="new amount of likes"/>
              </Col>
              <Col xs="12" md="4">
               <Button style={{backgroundColor: "#6699ff"}} onClick={()=> this.UpdateLikeTrack()}>Update nombre de likes</Button>
            </Col>
            </Row>
           
            </tbody>
          </Table>
          </Row>
        </Form>
<hr/>
        <Form>
          <Row>
          <Table>
           <thead className="tab">
              <h3>Track uptade Listenings</h3>
            </thead>
            <tbody>
            <Row>
              <Col xs="12" md="4">
               <select value={this.state.TrackUpdateListeningsTitle} onChange={this.handleTracUpdateListeningsTitleChange.bind(this)}>
                    <option value="" disabled selected>Track to update</option>
                    {this.state.trackList.map((track) => <option value={track._id}>{track.title}</option>)}
                   </select>
              </Col>
              <Col xs="12" md="4">
                <Input type="text" value={this.state.TrackUpdateListeningsNew} onChange={this.handleTrackUpdateListeningsNewChange.bind(this)} placeholder="new amount of listenings"/>
              </Col>
              <Col xs="12" md="4">
               <Button style={{backgroundColor: "#6699ff"}} onClick={()=>this.UpdateListeningsTrack()}>Update listenings</Button>
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