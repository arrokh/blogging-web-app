import React from 'react';
import UsersList from './components/UsersList';
import User from './components/User';

function App() {
	const [userId, setUserId] = React.useState(null);
	const [searchUserId, setSearchUserId] = React.useState(null);

	const clickSearchUser = () => {
		setSearchUserId(userId);
	};

	const inputHandler = e => {
		setUserId(e.target.value);
	}

	return (
		<React.Fragment>
			<UsersList />
			<hr />
			<input type="text" id='userId' name='userId' onChange={inputHandler} />
			<button onClick={clickSearchUser}>Search</button>
			<br /> <br />
			{searchUserId !== null ? <User userId={searchUserId} /> : null}
		</React.Fragment>
	);
}

export default App;
