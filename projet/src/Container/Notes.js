import React from 'react';
import Note from '../Components/Note'
import "./Notes.css"
import axios from 'axios'

export default class notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes:[],
			newTitle:"",
			newNote:"",
			
		}
	}

componentWillMount() {
  this.fetchNotes();
}


fetchNotes = () => {
	axios.get('http://localhost:3001/notes')
  .then(response => {
    this.setState({notes: response.data})
  })
  .catch(error => console.log(error))
}
	

addNote()
{
	if((this.state.newTitle!="")&&(this.state.newNote!=""))
	{
		axios.put('http://localhost:3001/notes',{title:this.state.newTitle , content:this.state.newNote})
		 .then(response => {
			this.fetchNotes();
			this.setState({newTitle:"",newNote:""})
		})
		.catch(error => console.log(error))
			
		}
		
}

	editNewTitle(event)
	{
		this.setState({newTitle: event.target.value})
	}

	editNewNote(event)
	{
		this.setState({newNote: event.target.value})
	}

	deleteNote(i)
	{
		axios.delete('http://localhost:3001/notes/'+i,)
  			.then(response => {
  				this.fetchNotes();
  				})
 			 .catch(error => console.log(error))
	}

	noteEnter(e)
	{
		if(e.key=='Enter')
		{
			this.addNote();
		}
	}

	

	render() {
		return (
			<div className="mesNotes">

				<div className="newNote">
					<input className="title" type="text" placeholder="Title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)} />
					<textarea className="laNote" type="textarea" placeholder="note..." value={this.state.newNote} onChange={this.editNewNote.bind(this)} onKeyUp={this.noteEnter.bind(this)}/>
					<button onClick={() => this.addNote()}>Post !</button> 
				</div>		

				<div className="notes">
					{this.state.notes.map((lanote, id) =>
						 <Note  key={id} title={lanote.title} note={lanote.content} date={lanote.date} onClick={() => this.deleteNote(lanote._id)}/>
					)}
				</div>
			

			</div>
		);
	}
}
