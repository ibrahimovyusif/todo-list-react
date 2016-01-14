import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoListItem from './todo_list_item';
import TodoFilter from './todo_filter'

const TodoList = (props) => {
	const TodoItems = props.existingTodos.map((todo) => {
		return <TodoListItem
			key={todo}
			todo={todo}
		/>
	})

	return (
		<ul className="col-md-4 list-group">
			<div>
				{TodoItems}
			</div>
		</ul>
	)
}


export default TodoList;