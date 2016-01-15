import React, {Component} from 'react';



class todoFilter extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div  className="filterButtons">
				<button onClick={this.showAll.bind(this)}>Show All</button>
				<button onClick={this.showActive.bind(this)}>Show Active</button>
				<button onClick={this.showDone.bind(this)}>Show done</button>
			</div>
		)
	}

	showAll(){
		this.props.onFilterAction('all');
	}
	showActive(){
		this.props.onFilterAction('active');
	}
	showDone(){
		this.props.onFilterAction('done');
	}
}

export default todoFilter;