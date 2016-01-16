import React, {Component} from 'react';

const STATE_ACTIVE = 'active';
const STATE_DONE = 'done';


class TodoListItem extends Component {

	render(){

		if(this.props.todo.state === STATE_ACTIVE){
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withoutLineTodo" id="my-div-1">
						{this.props.todo.text}
					</div>
				</li>
			)
		}
		else{
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withLineTodo" id="my-div-2">
						<strike>{this.props.todo.text}</strike>
					</div>
				</li>
			)
		}
	}

	onClickTodo(){

		if(this.props.todo.state === STATE_ACTIVE){
			this.props.changeState(STATE_DONE)
		}
		else if(this.props.todo.state === STATE_DONE){
			this.props.changeState(STATE_ACTIVE)
		}
	}

}

export default TodoListItem;