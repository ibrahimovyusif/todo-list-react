import React, {Component} from 'react'
import TodoListItem from './todo_list_item';
import RandomId from 'random-id'

class TodoList extends Component {

	constructor(props){
		super(props);
	}

	render(){
		var self = this; 

		let i=0;
		const TodoItems = self.props.existingTodos.map((todo) => {
			console.log('a',i, '    ',this.props.existingTodos[i])
			const changedState = function(newState){
				todo.state = newState;
				self.props.reload(newState);
			}
			return <TodoListItem
				key={todo.text}
				todo={todo}
				changer={changedState}
				filterType={self.props.handleVisibility}
			/>
			i++;

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