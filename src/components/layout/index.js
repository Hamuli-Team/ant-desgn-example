import React from "react";

import { Layout, Affix } from "antd";

import MyMenu from "./MyMenu";
import MyPageHeader from "../MyPageHeader";

const { Header, Sider, Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout>
      <Affix offsetTop={0}>
        <Sider breakpoint="md" theme="light" collapsedWidth="0">
          <MyMenu />
        </Sider>
      </Affix>
      <Layout>
        <Affix offsetTop={0}>
          <Header style={{ height: 75, backgroundColor: "#fff", padding: 0 }}>
            <MyPageHeader />
          </Header>
        </Affix>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
