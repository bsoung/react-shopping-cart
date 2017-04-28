import React, { Component } from 'react';
import Board from './Board';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	render() {
		const { text } = this.state
		
		return (
			<div className="appContainer">
				<Board text={text} />
			</div>
		)
	}
}

