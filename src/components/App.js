import React, { Component } from 'react';
import Board from './Board';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			list: []
		};
	}

	onSubmit(e) {
		e.preventDefault();
		let copy = [...this.state.list];
		copy.push(e.target.text.value);
		alert('this works');
		console.log('submitted', e.target.text.value);
		this.setState({
			text: e.target.text.value,
			list: copy
		})
	}

	render() {
		const {
			text,
			list
		} = this.state
		
		console.log(this.state);
		return (
			<div className="appContainer">
				<Board onSubmit={this.onSubmit.bind(this)} text={text} list={list} />
			</div>
		)
	}
}

