import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodoBar from './components/addTodo_bar';
import TodoList from './components/todo_list';
import TodoListItem from './components/todo_list_item';
import TodoFilter from './components/todo_filter';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { todos: [], filterType:'all' };
	}

	addTodo(term) {

		this.state.todos.push(term);
		
		this.setState({
			todos: this.state.todos
		})
	}

	filterTodos(filterType) {
		console.log('aaa ', filterType)
		this.state.filterType = filterType;

		this.setState({
			filterType: filterType
		})
	}

	render() {
		console.log(this.state.filterType)
		if(this.state.filterType==='all'){

			return (
				<div>
					<AddTodoBar onNewTodoAdded={term=> this.addTodo(term)} />
					<TodoList  existingTodos={this.state.todos} />
					<TodoFilter onFilterAction={(filterType) => this.filterTodos(filterType)}/>
				</div>
			)
		}
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));