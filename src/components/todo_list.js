import React, {Component} from 'react'
import TodoListItem from './todo_list_item';
import RandomId from 'random-id'

class TodoList extends Component {

	constructor(props){
		super(props);
	}

	render(){
		var self = this; 

		const TodoItems = self.props.existingTodos.map((todo) => {
			
			const changedState = function(newState){
				todo.state = newState;
				self.props.reloadNewState(newState);
			}
			return <TodoListItem
				key={todo.text}
				todo={todo}
				changeState={changedState}
				filterType={self.props.handleVisibility}
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

}

export default TodoList;