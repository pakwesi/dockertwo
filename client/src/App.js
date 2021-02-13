import React, {Fragment} from 'react';
import { gql, useQuery, useMutation,  ApolloClient,
  useApolloClient, useSubscription, useLazyQuery } from '@apollo/client';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

/*import LeftSideBar from './components/LeftSideBar/';
import BurgerMenu from './components/BurgerMenu'; */

import NavbarHeader from './components/NavBarComponents/NavbarHeader'

import HomePage from './pages/HomePage/HomePage.component';
import AboutPage from './pages/AboutPage/AboutPage.component.jsx';
import ContactSection from './components/AboutPageComponent/ContactSection.jsx'
import LogInPage from './pages/AuthPage/LogInPage.component';
import Register from './components/Auth/Register';
import MusicPage from './pages/MusicPage/MusicPage.component';
import SongPage from './components/MusicPageComponent/SongPage';



const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;



const query = gql`
query {
  users {
    id
    username
    email
  }
}

`




function App() {

  const { data } = useQuery(IS_LOGGED_IN);
  
  return (
    <Fragment>
    <NavbarHeader />
    <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path="/about" component={AboutPage} />
       <Route exact path="/music" component={MusicPage} />
       <Route exact path="/contact" component={ContactSection} />
       {data.isLoggedIn ? (
        <Switch>
          <Route exact path="/musicupload" component={SongPage} />
        </Switch>
      ) : (<Switch>
        <Route exact path="/login" component={LogInPage} />
       <Route exact path="/signin" component={Register} />
        </Switch>)} 
    </Switch>
    </Fragment>
  );
}

export default App;
