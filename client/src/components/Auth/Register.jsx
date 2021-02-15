import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';


import { useHistory } from "react-router-dom";
import styled from 'styled-components';


const CREATE_PERSON = gql`
 mutation($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      user {
        id
        username
        password
      }
    }
  }
`;

const ALL_PERSONS = gql`
 query {
  users {
    id
    username
    email
  }
}
`


const Register = ({ setError }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  let history = useHistory();

  const [ createPerson, { loading, error } ] = useMutation(CREATE_PERSON, {  awaitRefetchQueries: "true",
    refetchQueries: [ { query: ALL_PERSONS } ],
    ignoreResults: true,
    onError: (error) => {
      if (error.graphQlErrors && error.graphQLErrors.length > 0) {
          // There are graphQL errors and there may be multiple but its always an array.
          // You should handle it properly

           const { message } = error.graphQLErrors[0]
           console.log(message) // e.g. ERROR_INVALID_LOGIN_PROVIDER

       } else if (error.networkError) {
          // There may be a network error
           const { message } = error.networkError
           console.log(message) // e.g. NetworkError when attempting to fetch resource.
       }
}
  })

  const submit = (event) => {
    event.preventDefault()

    createPerson({  variables: { username, password, email } })

    setUsername('')
    setEmail('')
    setPassword('')
    history.push("/");
  }

  function handleClick() {
    history.push("/");
  }


  return (
  <div>
  <LogContainer>
  <div class="container">
  <form 
  onCompleted={handleClick}
  >
  <div class="left">
    <div class="header">
      <h2 class="animation a1">Welcome Back</h2>
      <h4 class="animation a2">Log in to your account using email and password</h4>
    </div>
    <div class="form">
      <input type="text" class="form-field animation a3" placeholder="name" 
      value={username}
      onChange={({ target }) => setUsername(target.value)}
      />
      <input type="email" class="form-field animation a3" placeholder="Email Address" 
      value={email}
      onChange={({ target }) => setEmail(target.value)}
      />
      <input type="password" class="form-field animation a4" placeholder="Password" 
      value={password}
      onChange={({ target }) => setPassword(target.value)}
      />
      
      <button class="animation a6" type="button"
      onClick={submit}
      >SIGNIN</button>
    </div>
  </div>
  </form>
  <div class="right"></div>
</div>

  </LogContainer>
  </div>
  );
  
}

export default Register;

const LogContainer = styled.section`

@import url('https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap');



  font-family: 'Rubik', sans-serif;


.container {
  display: flex;
  height: 100vh;
}

.left {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation-name: left;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
}

.right {
  flex: 1;
  background-color: black;
  transition: 1s;
  background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}



.header > h2 {
  margin: 0;
  color: #4f46a5;
}

.header > h4 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 15px;
  color: rgba(0,0,0,.4);
}

.form {
  max-width: 80%;
  display: flex;
  flex-direction: column;
}

.form > p {
  text-align: right;
}

.form > p > a {
  color: #000;
  font-size: 14px;
}

.form-field {
  height: 46px;
  padding: 0 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: .2s;
  margin-top: 20px;
  color: black;
}

.form-field:focus {
  border-color: #0f7ef1;
}

.form > button {
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%,#0097ff 100%); 
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Rubik', sans-serif;
}

.animation {
  animation-name: move;
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.a1 {
  animation-delay: 2s;
}

.a2 {
  animation-delay: 2.1s;
}

.a3 {
  animation-delay: 2.2s;
}

.a4 {
  animation-delay: 2.3s;
}

.a5 {
  animation-delay: 2.4s;
}

.a6 {
  animation-delay: 2.5s;
}

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}

`;
