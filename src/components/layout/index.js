
import React from 'react';

import { Layout } from 'antd';

import MyMenu from './MyMenu';
import MyPageHeader from '../MyPageHeader';

const { Header, Sider, Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout>
    <Sider breakpoint="md" theme="light" collapsedWidth="0">
      <MyMenu/>
    </Sider>
    <Layout>
      <Header style={{ height: 75, backgroundColor: "#fff", padding: 0,}}>
        <MyPageHeader />
      </Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
  );
};

export default LayoutWithRoute;