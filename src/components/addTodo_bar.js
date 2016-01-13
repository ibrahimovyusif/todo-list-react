import React, { Component } from 'react';

import TodoListItem from './todo_list_item';


class AddTodoButton extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '', todos: []};
	}

	render() {
		return (
			<div>
				<input 

					onChange={event=>this.setState({ term: event.target.value})}
				/>
				<button onClick= {(event) => this.onClickAction(this.state.term)} >
					Add ToDo
				</button> 
				Value of the input: {this.state.term}	

			</div>
				
		)
	}

	onClickAction(term) {
		console.log(term)
		this.state.todos.push(term);
		
	}
};

export default AddTodoButton;