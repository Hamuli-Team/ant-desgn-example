import React from "react";
import { Menu, Typography } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  PlusCircleOutlined,
  ProjectOutlined,
  CarryOutOutlined,
  ShoppingOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  InboxOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Link, useLocation } from "react-router-dom";

import UserProfile from "../UserProfile";

const { Title } = Typography;

const MyMenu = () => {
  const location = useLocation();

  //   state = {
  //     collapsed: false,
  //   };

  //   toggleCollapsed = () => {
  //     this.setState({
  //       collapsed: !this.state.collapsed,
  //     });
  //   };
  return (
    <div>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        //   theme="dark"
        //   inlineCollapsed={this.state.collapsed}
      >
        <UserProfile />

        <Menu.Item key="/" icon={<HomeOutlined />}>
          <span>Home</span>
          <Link to="/" />
        </Menu.Item>

        <Menu.Item key="/products" icon={<ShoppingOutlined />}>
          <span>Products</span>
          <Link to="/products" />
        </Menu.Item>

        <Menu.Item key="6" icon={<ShopOutlined />}>
          Multi Stores
        </Menu.Item>

        <Menu.Item key="7" icon={<InboxOutlined />}>
          Deliveries
        </Menu.Item>

        <Menu.Item key="9" icon={<EnvironmentOutlined />}>
          Directory
        </Menu.Item>

        <Menu.Item key="8" icon={<TeamOutlined />}>
          My Suppliers
        </Menu.Item>

        <Menu.Item key="/neworder" icon={<PlusCircleOutlined />}>
          <span>New Order</span>
          <Link to="/neworder" />
        </Menu.Item>

        {/* <Menu.Item key="2" icon={<ProjectOutlined />}>
            Dashboard
          </Menu.Item> */}

        <Menu.Item key="3" icon={<CarryOutOutlined />}>
          Order Received
        </Menu.Item>

        <Menu.Item key="5" icon={<ContainerOutlined />}>
          Invoice
        </Menu.Item>

        {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item> */}
        {/* <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item> */}
        {/* </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          > */}
        {/* <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              {/* <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
      </Menu>
    </div>
  );
};

export default MyMenu;
