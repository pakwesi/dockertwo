import React, { Component } from 'react';
import { NavLink, Link, useHistory, Redirect  } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { Icon as IconI } from 'react-icons-kit';
import {fortAwesome} from 'react-icons-kit/fa/fortAwesome';
import {music} from 'react-icons-kit/fa/music';

import {addressCard} from 'react-icons-kit/fa/addressCard'

import {envelopeO} from 'react-icons-kit/fa/envelopeO';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <a href=""><NavLink className='option' to='/'>
          <IconI className="Icon" icon={fortAwesome} size={22} />
        </NavLink></a>
        </Menu.Item>
        <Menu.Item key="setting:1"><NavLink className='option' to='/about'>
                <IconI className="Icon" icon={addressCard} size={22} />
              </NavLink>
              </Menu.Item>
                <Menu.Item key="setting:2"><NavLink className='option' to='/music'>
                <IconI className="Icon" icon={music} size={22} />
              </NavLink>
              </Menu.Item>
              <Menu.Item key="setting:3"><NavLink className='option' to='/contact'>
                <IconI className="Icon" icon={envelopeO} size={22} />
              </NavLink>
              </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;