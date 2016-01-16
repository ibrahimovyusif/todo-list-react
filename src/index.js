import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodoBar from './components/addTodo_bar';
import TodoList from './components/todo_list';
import TodoListItem from './components/todo_list_item';
import TodoFilter from './components/todo_filter';

const FILTERTYPE_ALL = 'all';
const FILTERTYPE_ACTIVE = 'active';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { todos: [], filteredTodos:[], filterType: FILTERTYPE_ALL };
	}

	addTodo(newTodo) {

		this.state.todos.push(newTodo);

		var newTodoArray = [];

		for (var i = 0; i < this.state.todos.length; i++) {

			if(this.state.todos[i].state === this.state.filterType || this.state.filterType === FILTERTYPE_ALL){

				newTodoArray.push(this.state.todos[i]);
			} 
		}
		
		this.setState({
			todos: this.state.todos,
			filteredTodos: newTodoArray
		})
	}

	filterTodos(filterType) {

		var newTodoArray = [];

		for (var i = 0; i < this.state.todos.length; i++) {

			if(this.state.todos[i].state === filterType || filterType === FILTERTYPE_ALL){

				newTodoArray.push(this.state.todos[i]);
			} 
		}

		this.setState({
				filteredTodos: newTodoArray,
				filterType: filterType
		});
	}

	reloadNewState(newTodoState){

		this.setState({
			todos: this.state.todos
		})
	}

	render() {

		return (
			<div>
				<AddTodoBar onNewTodoAdded={newTodo=> this.addTodo(newTodo)} />
				<TodoList reloadNewState={newTodoState => this.reloadNewState(newTodoState)} existingTodos={this.state.filteredTodos} handleVisibility={this.state.filterType}/>
				<TodoFilter onFilterAction={filterType => this.filterTodos(filterType)}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));