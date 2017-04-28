import React, { Component } from 'react';

export default class List extends Component {
	onClickDelete(index, e) {
		e.preventDefault();
		this.props.onDelete(index)
	}

	onClickEdit(index, e) {
		e.preventDefault();
		this.props.onEdit(index)
	}

	render() {
		const { list, editFlag, deleteFlag } = this.props;

		return (
			<ol>
				{list.map((item, index) => 
						<li key={index}>

							{item + '   '} 
							<a onClick={this.onClickDelete.bind(this, index)} >
								{deleteFlag === 0 ? '' : <i className="fa fa-minus-circle" aria-hidden="true"></i>}
							</a>

							<a onClick={this.onClickEdit.bind(this, index)}>
								{editFlag === 0 ? '' : <i className="fa fa-pencil" aria-hidden="true"></i>}
							</a>

						</li>
					)}
			</ol>
		)
	}
}