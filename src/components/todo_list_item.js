import React, {Component} from 'react';


class TodoListItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
	}

	render(){
		if(this.state.active === false){
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withoutLineTodo" id="my-div-1">
						{this.props.todo}
					</div>
				</li>
			)
		}
		else {
			return (
				<li>
					<div onClick={ this.onClickTodo.bind(this)} className="withLineTodo" id="my-div-2">
						<strike>{this.props.todo}</strike>
					</div>
				</li>
			)
		}
	}

	onClickTodo(){
		if(this.state.active){

			this.setState({active: false});
		}
		else{
			this.setState({active: true});

		}

	}


}

export default TodoListItem;