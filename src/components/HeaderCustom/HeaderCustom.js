import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout, Badge, Popover, Input } from "antd";
import "./HeaderCustom.css";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class HeaderCustom extends Component {
  handleClick = e => {
    console.log("click", e);
    this.props.pageSwitch(e.key);
  };

  render() {
    return (
      <Header
        style={{ background: "#fff", lineHeight: "64px" }}
        id="HeaderCustom"
      >
        <div className="logo">LOGO</div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.props.currentPage]}
          mode="horizontal"
          style={{ lineHeight: "61px" }}
        >
          <Menu.Item key="home" className="header-item">
            <Link to="/">
              <span>
                <Icon type="home" />Home
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="app" className="header-item">
            <Link to="/FAQ">
              <span>
                <Icon type="info-circle-o" />FAQ
              </span>
            </Link>
          </Menu.Item>

          <Menu.Item className="header-item">
            <Link to="/contact">
              <span>
                <Icon type="global" />Contact US
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderCustom;
