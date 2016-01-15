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

	addTodo(newTodo) {

		this.state.todos.push(newTodo);
		
		this.setState({
			todos: this.state.todos
		})
	}

	filterTodos(filterType) {
		this.state.filterType = filterType;

		this.setState({
			filterType: filterType
		})
	}

	reloader(newTodoState){

		this.setState({
			todos: this.state.todos
		})
	}

	render() {

		return (
			<div>
				<AddTodoBar onNewTodoAdded={newTodo=> this.addTodo(newTodo)} />
				<TodoList reload={newTodoState => this.reloader(newTodoState)} existingTodos={this.state.todos} handleVisibility={this.state.filterType}/>
				<TodoFilter onFilterAction={filterType => this.filterTodos(filterType)}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));