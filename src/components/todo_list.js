import React from 'react'
import TodoListItem from './todo_list_item';

const TodoList = (props) => {

	const TodoItems = ((todo) => {
		return <TodoListItem
			todo={todo}
		/>
	})

	return (
		<ul className="col-md-4 list-group">
		</ul>
	)
}

export default TodoList;