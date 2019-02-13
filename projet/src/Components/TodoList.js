import React from 'react';
import ReactDOM from 'react-dom';
import './TodoList.css';

console.clear();

class TodoList extends React.Component{
  
  constructor(){
    super();
    
    this.state = {
      itemInput : '',
      error: false,
      items: [
        {id: 1, text: 'Item 1'},
        {id: 2, text: 'Item 2'},
        {id: 3, text: 'Item 3'},
      ]
    };
    
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    
    if (!this.state.itemInput){
      this.setState({error: true});
      return;
    }
    
    this.setState({
       itemInput : '',
       error: false,
       items : [...this.state.items, {
          id: Math.random(),
          text: this.state.itemInput
       }]
    });
  }
  
  removeItem(id){
    const newItems = this.state.items.filter(item => item.id != id);
    
    this.setState({
       items : newItems
    });
  }

  render(){
    return(
      <div className="container">
        <form className="d-flex mt-2 mb-4" onSubmit={this.addItem}>
          <input 
            type="text" 
            className={`form-control ${this.state.error ? 'border border-danger' : ''}`} 
            value={this.state.itemInput} 
            onChange={e => this.setState({itemInput : e.target.value})}
            placeholder="Item" />
          
          <button type="submit" className="btn btn-primary ml-2">ADD</button>
        </form>

        <ul className="list-group">
          {this.state.items.map(item => (
            <li key={item.id} 
              className="list-group-item d-flex justify-content-between align-items-center">
              {item.text}
              <span className="badge badge-danger badge-pill" onClick={this.removeItem.bind(this, item.id)}>X</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
        
export default TodoList;