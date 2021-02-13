import React from 'react';
import styled from 'styled-components';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient } from '@apollo/client';

import { useHistory } from "react-router-dom";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;


const SignOutButton = () => {
    let history = useHistory();
    const client = useApolloClient();
    const { data } = useQuery(IS_LOGGED_IN);

    const logout = () => {
        localStorage.removeItem("token");
        client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: false }, });
      };


    return (
       
        <div class="buttons">
        <div class="container">
            <button class="btn effect01" target="_blank"
            onClick={logout}
            ><span>LogOut</span></button>
        </div>
      </div>
      
      
    )
}

export default SignOutButton;

const SignOutButtonContainer = styled.section`

.buttons {
  display: flex;
  flex-direction: row;
      flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
/*   padding: 2em 0em; */
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #FFF;
  padding:  40px 0px;
  width: 240px;
}


.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.btn:hover {
  text-decoration: none;
}

/*btn_background*/
.effect01 {
  color: #FFF;
  border: 4px solid #000;
  box-shadow:0px 0px 0px 1px #000 inset;
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.effect01:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow:0px 0px 0px 4px #EEE inset;
}

/*btn_text*/
.effect01 span {
  transition: all 0.2s ease-out;
  z-index: 2;
}
.effect01:hover span{
  letter-spacing: 0.13em;
  color: #333;
}

/*highlight*/
.effect01:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
}
.effect01:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
}
`;

