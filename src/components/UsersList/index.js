import React from 'react';
import UserListItem from '../UserListItem';

function UsersList (props) {
	
	const users = props.users;
	
	return(
	<ol>
		{
			users.map(user =>{
			
			})
		}
	</ol>
	);
}

export default UsersList;
