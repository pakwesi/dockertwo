import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import { ApolloClient, HttpLink,ApolloLink, concat, createHttpLink, InMemoryCache, ApolloProvider, gql, from,
useQuery
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import LogInPage from './pages/AuthPage/LogInPage.component';
import HomePage from './pages/HomePage/HomePage.component';
import MusicPage from './pages/MusicPage/MusicPage.component';


const cache = new InMemoryCache();
const link = createUploadLink({
  uri: "http://188.166.32.125:8000/graphql/"
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});



const query = gql`
query {
  users {
    id
    username
    email
  }
}

`



function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <MusicPage /> : <LogInPage />;
}


ReactDOM.render(
  
    <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
