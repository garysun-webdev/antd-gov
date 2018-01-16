import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout, Popover, Input } from "antd";
import SiderCustom from "./SiderCustom";
import { withRouter } from "react-router-dom";
import "./HeaderCustom.css";

const { Header } = Layout;
const Search = Input.Search;

class HeaderCustom extends Component {
  constructor() {
    super();
    this.state = { isMobile: false };
  }
  componentWillMount() {
    this.getClientWidth();
    window.onresize = () => {
      console.log("window size change");
      this.getClientWidth();
    };
  }

  getClientWidth = () => {
    const clientWidth = document.body.clientWidth;
    this.setState({ isMobile: clientWidth <= 992 });
  };

  handleClick = e => {
    console.log("click", e);
  };

  render() {
    return (
      <Header
        style={{ background: "#fff", lineHeight: "64px" }}
        id="HeaderCustom"
      >
        <div className="logo">LOGO</div>
        {this.state.isMobile ? (
          <Popover
            trigger="click"
            placement="bottomLeft"
            content={
              <SiderCustom selectedKeys={this.props.location.pathname} />
            }
            style={{ paddingRight: 0 }}
          >
            <Icon type="bars" className="trigger custom-trigger" />
          </Popover>
        ) : (
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.props.location.pathname]}
            mode="horizontal"
            style={{ lineHeight: "61px" }}
          >
            <Menu.Item key="/" className="header-item">
              <Link to="/">
                <span>
                  <Icon type="home" />Home
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/FAQ" className="header-item">
              <Link to="/FAQ">
                <span>
                  <Icon type="info-circle-o" />FAQ
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/contact" className="header-item">
              <Link to="/contact">
                <span>
                  <Icon type="global" />Contact US
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/chart" className="header-item">
              <Link to="/chart">
                <span>
                  <Icon type="area-chart" />Data Virtualization
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        )}
      </Header>
    );
  }
}

export default withRouter(HeaderCustom);
