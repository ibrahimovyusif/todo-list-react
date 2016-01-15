import React, { Component } from 'react';

class AddTodoButton extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '', state:'active'};
	}

	render() {
		return (
			<div className="addTodo-bar">
				<input 
					id = 'input_id'
					onChange={event=>this.setState({ text: event.target.value})}
				/>
				<button 
					onClick= {(event) => this.onClickAction(this.state)} 
				>
					Add ToDo
				</button> 
			</div>
				
		)
	}

	onClickAction(state) {
		this.setState(state)
		this.props.onNewTodoAdded(state);
		document.getElementById('input_id').value='';
	}
};

export default AddTodoButton;