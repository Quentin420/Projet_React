import React from 'react';
import ToDo from '../Components/ToDo';
import './TodoList.css';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo:"",
		}

	}

editNewTodo(event)
	{
		this.setState({newTodo: event.target.value})
	}

deleteTodo = (idtodo) => {
		
		this.props.deleteTodo(idtodo, this.props.id);
	}

toggleCB = (idtodo) => {
		console.log(idtodo);
		this.props.toggleCB(idtodo, this.props.id);
	}



	addTodo = () =>
	{
		if(this.state.newTodo!="")
		{
			this.props.addTodo(this.state.newTodo , this.props.id);
			this.setState({newTodo:""});

		}
	}

	pressEnter(e)
	{
		if(e.key=='Enter')
		{
			this.addTodo();
		}
	}



	render() {
		return (
			<div className="TodoList">
				<div className="topPart">
					<p className="ToDoListTitle">{this.props.TodoListName}</p> <button onClick={this.props.deleteClick}><img src={require("../icons/delete-button.png")} alt="delete"/></button>
				</div>
				<div className="newToDo">
					<textarea className="new" type="textarea" placeholder="Todo..." value={this.state.newTodo} onChange={this.editNewTodo.bind(this)} onKeyUp={this.pressEnter.bind(this)}/>
					<button onClick={this.addTodo}>Add !</button> 
				</div>		
				<div className="Todos">

					{this.props.todos.map((todo, id) =>

						 <ToDo key={id} id={todo._id} todo={todo.todo} checked={todo.checked % 2} deleteTodo={this.deleteTodo} toggleCB={this.toggleCB}/>
					)}

				</div>
			

			</div>
		);
	}
}
