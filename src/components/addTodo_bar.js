import React, { Component } from 'react';

// import TodoList from './components/todo_list';

// import TodoListItem from './todo_list_item';


class AddTodoButton extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return (
			<div className="addTodo-bar">
				<input 
					id = 'input_id'
					onChange={event=>this.setState({ term: event.target.value})}
				/>
				<button 
					onClick= {(event) => this.onClickAction(this.state.term)} 
				>
					Add ToDo
				</button> 
			</div>
				
		)
	}

	onClickAction(term) {
		this.setState({term})
		this.props.onNewTodoAdded(term);
		document.getElementById('input_id').value='';
	}
};

export default AddTodoButton;