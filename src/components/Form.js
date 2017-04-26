import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		const {onSubmit} = this.props;
		console.log(this.props);
		return (
			<div>
				<form onSubmit={onSubmit}>
					<input type="text" placeholder="hello" name="text">
					</input>
				</form>
			</div>
		)
	}
}



