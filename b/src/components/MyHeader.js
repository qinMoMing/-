import React from 'react';
import styles from './myHeader.css';
import router from 'umi/router';
import { Layout, Menu, Input} from 'antd';
const R = ['','','','','','','','./launch/launch'];
const { Header} = Layout;
const Search = Input.Search;
export default class MyHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login : props.login,
      keyPath : props.keyPath,
    }

  }
  render() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.state.keyPath}
            style={{ lineHeight: '64px'}}
            onClick={({ item, key, keyPath })=>{
                this.setState({
                    keyPath,
                })
                router.push(R[key]);
            }}
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
    );
  }
}