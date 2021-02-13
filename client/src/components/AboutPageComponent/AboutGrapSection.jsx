import React from 'react';

import { useQuery, gql } from '@apollo/client';


const PROFILE_QUERY = gql`
  query{
  me{
    id
    username
    email
  }
}
`;

const AboutGrapSection = () => {
  
  const { loading, error, data } = useQuery(PROFILE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{ error.message }</p>;

  return data.me.map(({ username, email }) => (
    <div style={{ color: 'black'}} key={data.me.id}>
      <p>
        {username}: {email} 
      </p>
    </div>
  ));
}

export default AboutGrapSection;
