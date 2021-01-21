import React from "react";
import { Dropdown, Menu, Button } from "antd";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";

function MyDropdown({ onCatChange }) {
  const [catTitle, setCatTitle] = React.useState("All Category");

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          onCatChange("all");
          setCatTitle("All Category");
        }}
        icon={<UserOutlined />}
      >
        All Category
      </Menu.Item>

      <Menu.Item
        key="1"
        onClick={() => {
          onCatChange("cat1");
          setCatTitle("Category 1");
        }}
        icon={<UserOutlined />}
      >
        Category 1
      </Menu.Item>

      <Menu.Item
        key="2"
        onClick={() => {
          onCatChange("cat2");
          setCatTitle("Category 2");
        }}
        icon={<UserOutlined />}
      >
        Category 2
      </Menu.Item>

      <Menu.Item
        key="3"
        onClick={() => {
          onCatChange("cat3");
          setCatTitle("Category 3");
        }}
        icon={<UserOutlined />}
      >
        Category 3
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        <AppstoreOutlined />
        {catTitle}
      </Button>
    </Dropdown>
  );
}

export default MyDropdown;
