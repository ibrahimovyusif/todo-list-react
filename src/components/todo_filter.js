import React, {Component} from 'react';
import TodoListItem from './todo_list_item';



class todoFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterType: 'all'
		}
	}

	render() {
		console.log('state ', this.state.filterType)
		return (
			<div className="filterButtons">
				<button onClick={this.showAll.bind(this)}>Show All</button>
				<button onClick={this.showActive.bind(this)}>Show Active</button>
				<button onClick={this.showDone.bind(this)}>Show done</button>
			</div>
		)
	}

	showAll(){
		this.setState({filterType: 'all'})
		this.props.onFilterAction(this.state.filterType)
	}
	showActive(){
		this.setState({filterType: 'active'})
		this.props.onFilterAction(this.state.filterType)
	}
	showDone(){
		this.setState({filterType: 'done'})
		this.props.onFilterAction(this.state.filterType)
	}
}


export default todoFilter;
