import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


const GET_USER_BY_ID = gql`
    query GetUserById($id: ID!) {
        user(id: $id) {
            name
            email
            listArticles {
                id
                title
            }
        }
    }
`;

function Render(props) {
    const { data } = props;
    return <React.Fragment>
        Name: {data.name} <br />
        Email: {data.email}
        List articles : <br />
        <ul>
            {data.listArticles.map(({ id, title }) => {
                return <li key={id}>{title}</li>;
            })}
        </ul>

    </React.Fragment>;
}

function User(props) {
    const { userId } = props;
    return (
        <React.Fragment>
            <Query
                query={GET_USER_BY_ID}
                variables={{ id: userId }}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>{error.graphQLErrors[0].message}</p>;
                    return <Render data={data.user} />;
                }}
            </Query>
        </React.Fragment>
    );
}

export default User;