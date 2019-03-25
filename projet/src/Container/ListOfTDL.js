import React from 'react';
import axios from 'axios';
import TodoList from '../Container/TodoList';
import "./ListOfTDL.css"

export default class ListOfTDL extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
			newTitle:"",
			lists:[],
		}
		}

componentWillMount() {
  this.fetchTDL();
}


fetchTDL = () => {
	axios.get('http://localhost:3001/todolists')
  .then(response => {
    this.setState({lists: response.data})
  })
  .catch(error => console.log(error))
}


	
	editNewTitle(event)
	{
		this.setState({newTitle: event.target.value});
	}

	AddList()
	{
		if(this.state.newTitle!=="")
		{

			axios.put('http://localhost:3001/todolists', {title:this.state.newTitle})
  			.then(response => {
  				this.fetchTDL();
  				this.setState({ newTitle:""});
  				})
 			 .catch(error => console.log(error))
			
		}
	}

	deleteList(i)
	{	
		axios.delete('http://localhost:3001/todolists/'+i,)
  			.then(response => {
  				this.fetchTDL();
  				})
 			 .catch(error => console.log(error))
	}

	deleteTodo = (idtodo, idlist) =>
	{
		axios.delete('http://localhost:3001/todolists/' + idlist + "/" + idtodo)
  			.then(response => {
  				this.fetchTDL();
  				})
 			 .catch(error => console.log(error))
		
	}

	addTodo = (todotitle, idlist) =>
	{
		axios.post('http://localhost:3001/todolists/' + idlist ,{todo:todotitle})
  			.then(response => {
  				this.fetchTDL();
  				})
 			 .catch(error => console.log(error))
		
	}

	toggleCB = (idtodo, idlist) =>
	{

		axios.post('http://localhost:3001/todolists/' + idlist + '/' + idtodo)
  			.then(response => {
  				this.fetchTDL();
  				})
 			 .catch(error => console.log(error))
		
	}
	pressEnter(e)
	{
		if(e.key=='Enter')
		{
			this.AddList();
		}
	}

	render() {

		return (
			<div className="ListOfTDL">
			<div className="list">
			
			{this.state.lists.map((thelist, id) => 
	
						 <TodoList key={id} id={thelist._id} TodoListName={thelist.title} todos={thelist.list} deleteClick={() => this.deleteList(thelist._id)} deleteTodo={this.deleteTodo}  addTodo={this.addTodo} toggleCB={this.toggleCB}/>
					)
			}
			
				<div className="new">
				<button className="addButton" onClick={() => this.AddList()}><img src={require("../icons/add.png")} alt="AddList"/></button>
				<input className="newTitle" type="text" placeholder="New list title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)}  onKeyUp={this.pressEnter.bind(this)}/>
			</div>
			
			</div>

			
			</div>
		);
	}
}


