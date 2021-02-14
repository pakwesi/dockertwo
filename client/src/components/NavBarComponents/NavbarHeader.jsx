import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './rightMenu'
import { Drawer, Button } from 'antd';
import styled from 'styled-components';


class NavbarHeader  extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
      <NavbarHeaderContainer>
      <nav className="menuBar">
          <div className="logo">
            <a href="/">PK</a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="PkCreative"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
            </Drawer>
          </div>
        </nav>
      </NavbarHeaderContainer>
        
    );
  }
}
export default NavbarHeader;

const NavbarHeaderContainer = styled.section`


`;