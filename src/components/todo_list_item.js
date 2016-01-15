import React, {Component} from 'react';

class TodoListItem extends Component {
	constructor(props) {
		super(props);
	}

	render(){

		if(this.props.todo.state === 'active' && (this.props.filterType === 'active' || this.props.filterType === 'all')){
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withoutLineTodo" id="my-div-1">
						{this.props.todo.text}
					</div>
				</li>
			)
		}
		else if(this.props.todo.state === 'done' && (this.props.filterType === 'done' || this.props.filterType === 'all')){
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withLineTodo" id="my-div-2">
						<strike>{this.props.todo.text}</strike>
					</div>
				</li>
			)
		}
		else {
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className={this.props.filterType ? "withoutLineTodo" : "withLineTodo"}>
					</div>
				</li>
			)
		}
	}

	onClickTodo(){
		if(this.props.todo.state === 'active'){
			this.props.changer('done')
		}
		else if(this.props.todo.state === 'done'){
			this.props.changer('active')


		}
	}

}

export default TodoListItem;