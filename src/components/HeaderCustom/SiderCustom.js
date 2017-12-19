import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SiderCustom = props => {
  return (
    <Menu mode="inline" selectedKeys={[props.selectedKeys]}>
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

      <Menu.Item key="/charts" className="header-item">
        <Link to="/chart">
          <span>
            <Icon type="area-chart" />Data Virtualization
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default SiderCustom;
