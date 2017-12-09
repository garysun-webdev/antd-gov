import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout, Badge, Popover, Input } from "antd";
import "./HeaderCustom.css";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class HeaderCustom extends Component {
  constructor() {
    super();
    this.state = {
      current: "mail"
    };
  }
  handleClick = e => {
    console.log("click", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Header style={{ background: "#fff" }} id="HeaderCustom">
        <div className="logo">LOGO</div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="mail">
            <Link to="/">
              <Icon type="mail" />Navigation One
            </Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/about">
              <Icon type="appstore" />Navigation Two
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/contact">Contact US</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderCustom;
