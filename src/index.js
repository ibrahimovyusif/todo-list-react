import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodoBar from './components/addTodo_bar';
import TodoList from './components/todo_list';
import TodoListItem from './components/todo_list_item';




class App extends Component {
	constructor(props) {
		super(props);

		// this.state = { todos: [] };


	}

	render() {
		return (
			<div>
				<AddTodoBar />
				<TodoList />
				<TodoListItem />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));