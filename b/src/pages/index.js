import React from 'react';
import styles from './index.css';

import { Layout, Menu, Breadcrumb, Input} from 'antd';

const { Header, Content, Footer } = Layout;
const Search = Input.Search;
export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px'}}
          >
            <Menu.Item key="1" className={styles.menuItem}>首页</Menu.Item>
            <Menu.Item key="2" className={styles.menuItem}>捐款</Menu.Item>
            <Menu.Item key="3" className={styles.menuItem}>捐物</Menu.Item>
            <Menu.Item key="4" className={styles.menuItem}>爱心服务</Menu.Item>
            <Menu.Item key="5" className={styles.menuItem}>爱心机构</Menu.Item>
            <Menu.Item key="6" className={styles.menuItem}>爱心宣传</Menu.Item>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, marginLeft:200}}
            />
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          智能爱心平台
        </Footer>
      </Layout>
    );
  }
}
