import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import Slideshow from '../components/SlideShow';

import './mainLayout.css';

const { Header, Content, Footer } = Layout;

function MainLayout() {
  return (
    <Layout className="layout">
      <Header className="header">
        <Menu mode="horizontal">
          <Menu.Item>
            <Avatar></Avatar>
          </Menu.Item>
        </Menu>
        <Menu className="header__name" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <div className="layout__image-slider layout__content">
        <Content className="content">
          <div className="site-layout-content">
            <Slideshow />
          </div>
        </Content>
      </div>
      <div className="layout__intro-recruit layout__content">
        <Content className="content">
          <div className="site-layout-content">운영진 소개</div>
        </Content>
        <Content className="content" style={{ marginLeft: 10 }}>
          <div className="site-layout-content">모집</div>
        </Content>
      </div>

      <Footer className="footer">IT 연합동아리 CADI</Footer>
    </Layout>
  );
}

export default MainLayout;
