import React, { Component } from 'react';
import List from './List';

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			currentWord: '',
			editFlag: 0,
			deleteFlag: 0
		}
	}

	setDeleteFlag() {
		let self = this;

		if (this.state.deleteFlag === 0) {
			self.setState({
				deleteFlag: 1,
				editFlag: 0
			});
		} else {
			self.setState({
				deleteFlag: 0
			});
		}
	}

	setEditFlag() {
		let self = this;

		if (this.state.editFlag === 0) {
			self.setState({
				editFlag: 1,
				deleteFlag: 0
			});
		} else {
			self.setState({
				editFlag: 0
			})
		}

	}

	onDelete(index) {
		let copy = [...this.state.list];
		copy = copy.filter(x => copy[index] !== x);

		this.setState({
			list: copy
		});
	}

	onDeleteAll() {
		let copy = [...this.state.list];
		copy = [];

		if (confirm('Are you sure you want to delete everything in this list?')) {
			this.setState({
				list: copy
			});
		}

	}

	onEdit(index) {
		let word = prompt('Enter a new entry');
		let copy = [...this.state.list];
		copy[index] = word;

		this.setState({
			list: copy
		});
	}

	onSubmit(e) {
		e.preventDefault();
		
		let entry = e.target.text.value;
		let copy = [...this.state.list];

		if (copy.indexOf(entry) === -1) {
			copy.push(e.target.text.value);

			this.setState({
				list: copy
			});

			this.state.currentWord = '';

		} else {

			alert('You already have this item in your list!');
		}
	}

	onChange(e) {
		this.setState({
			currentWord: e.target.value
		});
	}


	render() {
		const { list, editFlag, deleteFlag } = this.state;

		return (
			<div>
				{
					(deleteFlag === 0) ? 
					<button onClick={this.setDeleteFlag.bind(this)}>Delete</button> : 
					<button onClick={this.setDeleteFlag.bind(this)}>Done</button>
				}
				{
					(deleteFlag === 0) ? 
					'' : 
					<button onClick={this.onDeleteAll.bind(this)}>Delete All</button>
				}


				{
					(editFlag === 0) ? 
					<button onClick={this.setEditFlag.bind(this)}>Edit</button> : 
					<button onClick={this.setEditFlag.bind(this)}>Done</button>
				}
				
				<form onSubmit={this.onSubmit.bind(this)}>
					<input 
						value={this.state.currentWord} 
						type="text" 
						placeholder="hello" 
						name="text" 
						onChange={this.onChange.bind(this)}>
					</input>
				</form>

				<List 
						list={list} 
						editFlag={editFlag}
						deleteFlag={deleteFlag}
						onDelete={this.onDelete.bind(this)} 
						onEdit={this.onEdit.bind(this)}
						/>
			</div>
		)
	}
}



