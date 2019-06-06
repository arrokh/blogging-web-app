import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

function UsersList(props) {
	return (
		<Query
			query={gql`
				{
					users {
						id
						name
						email
					}
				}
			`}
		>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;

				return data.users.map(({ id, name, email }) => (
					<div key={id}>
						<p>- {name} => {email} <input onChange={() => {}} value={id} /></p>
					</div>
				));
			}}
		</Query>
	);
};

export default UsersList;