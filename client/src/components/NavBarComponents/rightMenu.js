import React from 'react';
import { NavLink, Link, useHistory, Redirect  } from 'react-router-dom';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient, useSubscription, useLazyQuery } from '@apollo/client';
import { Menu, Icon } from 'antd';
import { Icon as IconI } from 'react-icons-kit';
import {fileMusic} from 'react-icons-kit/icomoon/fileMusic';
import {ic_dehaze} from 'react-icons-kit/md/ic_dehaze';
import {times} from 'react-icons-kit/fa/times';
import {person} from 'react-icons-kit/ionicons/person'
import {user} from 'react-icons-kit/typicons/user'

import SignOutButton from '../Auth/SignOutButton';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;





const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const RightMenu = () => {
    const { data } = useQuery(IS_LOGGED_IN);
    let history = useHistory();
    const client = useApolloClient();

    const logout = () => {
        localStorage.removeItem("token");
        client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: false }, });
        history.push("/");
      };

    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
        {data.isLoggedIn ? (
            <NavLink className='option' to='/musicupload'>
            <IconI className="Icon" icon={fileMusic} size={22} />
          </NavLink>
            ) : (<NavLink className='option' to='/login'>
            <IconI className="Icon" icon={user} size={22} />
            </NavLink>) }
        </Menu.Item>
        <Menu.Item key="app">
        {data.isLoggedIn ? (<button class="btn effect01" target="_blank"             
        >
        <IconI onClick={logout}  className="Icon" icon={times} size={22} />
        </button>
          ) : (<NavLink className='option' to='/signin'>
          <IconI className="Icon" icon={person} size={22} />
        </NavLink>)
        }
        </Menu.Item>
      </Menu>
    );
}
export default RightMenu;