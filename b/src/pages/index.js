import React from 'react';
import styles from './index.css';

import { Layout, Menu, Breadcrumb, Input,  List, Avatar, Icon} from 'antd';
import MyHeader from "../components/MyHeader";

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
        <MyHeader login={false}  keyPath={['1']}/>

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