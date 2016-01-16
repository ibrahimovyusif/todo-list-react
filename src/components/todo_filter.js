import React, {Component} from 'react';

const FILTERTYPE_ALL = 'all';
const FILTERTYPE_ACTIVE = 'active';
const FILTERTYPE_DONE = 'done';


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
		this.props.onFilterAction(FILTERTYPE_ALL);
	}
	showActive(){
		this.props.onFilterAction(FILTERTYPE_ACTIVE);
	}
	showDone(){
		this.props.onFilterAction(FILTERTYPE_DONE);
	}
}

export default todoFilter;