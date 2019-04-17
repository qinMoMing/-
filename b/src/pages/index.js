import React from 'react';
import styles from './index.css';

import { Layout, Menu, Breadcrumb, Input,  List, Avatar, Icon} from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `资助贫困儿童 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: `受助人：陈晓明`,
    content: '资助某某儿童，时间地点家庭情况。资助原因等等的简单说明。资助某某儿童，时间地点家庭情况。资助原因等等的简单说明。资助某某儿童，时间地点家庭情况。资助原因等等的简单说明。资助某某儿童，时间地点家庭情况。资助原因等等的简单说明。',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const { Header, Content, Footer } = Layout;
const Search = Input.Search;
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login : false,
    }

  }
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
            <Menu.Item key="7" className={styles.menuItem}>发起项目</Menu.Item>
            <Menu.Item key="8" className={styles.menuItem}>{this.state.login ? "个人中心" : ("登录 | 注册")}</Menu.Item>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, marginLeft: "80px",}}
            />
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <h3 className={styles.recommend}>爱心推荐</h3>
          <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                  document.documentElement.scrollTop = 0;

                },
                pageSize: 5,
              }}
              dataSource={listData}
              // footer={<div><b>ant design</b> footer part</div>}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[/*<IconText type="star-o" text="156" />,*/ <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                  extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content} 
                </List.Item>
              )}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          智能爱心平台
        </Footer>
      </Layout>
    );
  }
}