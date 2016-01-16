import React, { Component } from 'react';

const STATE_ACTIVE = 'active';

class AddTodoButton extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '', state: STATE_ACTIVE};
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