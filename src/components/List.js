import React from 'react';

export default (props) => {
	console.log(props.list)
	return (
		<ul>
			{props.list.map((item, index) => <li key={index}>{item}</li>)}
		</ul>
	)
}