import React from 'react';

function UserListItem (props) {
	
	const {user} = props;
	
	return (
		
		<li>
			{
				user.fullName + ' ' + user.id
			}
		</li>
	);
}

export default UserListItem;
