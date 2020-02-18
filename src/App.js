import React, { Component } from 'react';
import UsersList from './components/UsersList';


const usersData = [
	{
		id: 1,
		fullName: 'Name Surname',
	},
	{
		id: 2,
		fullName: 'Name Surname',
	},
	{
		id: 3,
		fullName: 'Name Surname',
	},
	{
		id: 4,
		fullName: 'Name Surname',
	}
	
];

class App extends Component {
	
	constructor (props) {
		super(props);
	}
	
	render () {
		return (
			<UsersList users={usersData}/>
		);
	}
	
}

export default App;