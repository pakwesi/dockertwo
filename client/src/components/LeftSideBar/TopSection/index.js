import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

import { gql, useQuery, useMutation,  ApolloClient,
  useApolloClient, useSubscription, useLazyQuery } from '@apollo/client';


import BurgerButton  from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';

import logo from '../../../logo.svg';

import { Icon } from 'react-icons-kit';
import {drupal} from 'react-icons-kit/fa/drupal';
import {photo} from 'react-icons-kit/fa/photo';
import {fortAwesome} from 'react-icons-kit/fa/fortAwesome';
import {music} from 'react-icons-kit/fa/music';

import SignOutButton from '../../Auth/SignOutButton.jsx'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;



const TopSection = () => {
  const { setIsShowSidebar } = useContext(LeftSideBarContext);
  const { data } = useQuery(IS_LOGGED_IN);


  return (
    <HeaderContainer className="LeftSideBar__TopSection">
      <BurgerButton
        onClick={() => setIsShowSidebar(true)}
      />
      <div className="header">
        <NavLink className='logo-container' to="/">
        <Logo src={logo} alt="logo" />
        </NavLink>
        <div className="options">
        <NavLink className='option' to='/'>
          <Icon className="Icon" icon={fortAwesome} size={25} />
        </NavLink>
        <NavLink className='option' to='/music'>
          <Icon className="Icon" icon={music} size={25} />
        </NavLink>
        <NavLink className='option' to='/shop'>
          <Icon className="Icon" icon={photo} size={25} />
        </NavLink>
        {data.isLoggedIn && (
          <NavLink className='option' to='/'>
            <SignOutButton />
          </NavLink>
        )}
        
        </div>
      </div>
    </HeaderContainer>
  );
};

export default TopSection;

// Mobile friendly
const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px'
})

// Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customMedia.lessThan('tablet')`
        left: 20%;
    `}
`;

// Header Container
const HeaderContainer = styled.div`
  .Icon svg {
        vertical-align: bottom !important;
        margin-left: 1.5rem;
        color: var(--main-grey);
        &hover {
            background: var(--main-black);
        }
        ${customMedia.lessThan('smTablet')`
            display: none !important;
        `}
    }


.header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 20px 15px;
      margin-top: 25px;
      cursor: pointer;
      
    }
  }
}
    
    .signIn-btn {
        right: 0;
        top: -1%;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-grey-light);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &hover {
            background: var(--main-blue);
        }
        ${customMedia.lessThan('smTablet')`
            margin-top: 1.25rem;
            width: 5%;
        `}
    }
`;