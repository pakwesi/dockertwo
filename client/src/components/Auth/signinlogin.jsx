import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient } from '@apollo/client';
import Login from './Login';
import Register from './Register';


const ALL_PERSONS = gql`
query {
  users {
    id
    username
    email
  }
}
`


export const SigninLogin = () => {
    return (
        <div>
            <Register />
        </div>
    )
}


export const LogPage = () => {

    const [token, setToken] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const result = useQuery(ALL_PERSONS, {
        pollInterval: 2000
      })
    const client = useApolloClient()

    

    if (result.loading)  {
        return <div>loading...</div>
    }

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
          setErrorMessage(null)
        }, 10000)
      }

    const logout = () => {
        setToken(null)
        localStorage.clear()
        client.resetStore()
      }

    if (!token) {
    return (
      <div>
        <Login
          setToken={setToken}
          setError={notify}
        />
      </div>
    )
  }

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Register setError={notify} />
    </div>
  )
}

const Notify = ({errorMessage}) => {
    if ( !errorMessage ) {
      return null
    }
    return (
      <div style={{color: 'red'}}>
      {errorMessage}
      </div>
    )
  }
