import React from 'react';
import Form from './Form';
import List from './List';

export default (props) => {
	console.log(props.text);
	return (
		<div>
			<Form onSubmit={props.onSubmit} />
			<List list={props.list} />
		</div>
	)
}