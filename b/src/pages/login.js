
import React from 'react';

import styles from './Login.css';

import {
  Form, Icon, Card, Input, Select, Row, Col, Checkbox, Button, AutoComplete, 
  Menu, List, Modal, DatePicker,
} from 'antd';
import MyHeader from "../components/MyHeader";
const { Option } = Select;
const Search = Input.Search;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
const data = [{time:'2019-01-24',content:"'筹款上学'捐赠20元",num:20},{time:'2019-01-24',content:"'筹款上学'捐赠20元",num:20},{time:'2019-01-24',content:"'筹款上学'捐赠20元",num:20},{time:'2019-01-24',content:"'筹款上学'捐赠20元",num:20}]
@Form.create({})
class Login extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    registerV: false,
    loginV: true,
    showLoveModal: false,
    confirmLoading: false,
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(this.state.loginV){
          let message = JSON.stringify(values);
          sessionStorage.setItem("login",message);
        }
      }
    });
  }
  renderLogin = () => {
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit} className={styles.wrapForm}>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '输入账户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.loginFormForgot} href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            登录
          </Button>
          <Button type="primary" className={styles.loginFormButton} onClick = {()=>{
            this.setState({loginV:false})
            }}>
            立即注册
          </Button>
        </Form.Item>
      </Form> 
    )
  }
  renderRegister = () => {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return(
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className={styles.wrapForm}>
        <Form.Item
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
        <Form.Item
          label="再次输入密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Form.Item
          label="账户名"
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        {/* <Form.Item
          label="Habitual Residence"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences} />
          )}
        </Form.Item> */}
        <Form.Item
          label="手机号"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>
        {/* <Form.Item
          label="Website"
        >
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item> */}
        <Form.Item
          label="手机验证码"
          extra="We must make sure that your are a human."
        >
            {getFieldDecorator('captcha', {
              rules: [{ required: true, message: 'Please input the captcha you got!' }],
            })(
              <Input />
            )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" className={styles.resBut}
            onClick = {()=>{
              this.setState({loginV:true})
              }}>返回登录</Button>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
          
      </Form>
    )
  }
  renderResetPassword = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }; 
    return(
      <div style={{float:"left"}}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className={styles.wrapForm}>
          <Form.Item
            label="旧密码"
          >
            {getFieldDecorator('oldPassword', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            label="输入新密码"
          >
            {getFieldDecorator('newPassword', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            label="再次输入新密码"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            确认修改
          </Button>
        </Form>
      </div>
    )
  }
  renderPerson = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }; 
    return(
      <div style={{float:"left"}}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{padding:100}}>
          <Form.Item
            label="真实姓名"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="平台昵称"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="出生日期"
          >
            {getFieldDecorator('beneficiary_birthday')(
              <DatePicker onChange={this.onChange} />
            )}
          </Form.Item>
          <Form.Item
            label="性别"
          >
            {getFieldDecorator('sex', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select>
                <Option value="school">男</Option>
                <Option value="hospital">女</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            label="身份证号"
          >
            {getFieldDecorator('beneficiary_idcard', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="地址"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="联系方式"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 12, offset: 6 }}
            >
            <Button type="primary" htmlType="submit">保存</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  renderCenter = () => {
    return(
      <div>

        <div style={{width:"186px",padding:"64px 0",float:"left"}}>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1">
              <span>个人信息管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>平台密码修改</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>爱心币管理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>我发起项目的管理</span>
            </Menu.Item>
            <Menu.Item key="5">
              <span>我参与项目的管理</span>
            </Menu.Item>
          </Menu>
        </div>
        {/* {this.renderLove()} */}
        {/* {this.renderResetPassword()} */}
        {this.renderPerson()}
      </div>
    )
  }
  showLoveModal = () => {
    this.setState({
      showLoveModal: true,
    });
  }
  handleLoveCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      showLoveModal: false,
    });
  }
  handleLoveOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  renderLove = () => {
    return (
      <div style={{float:"left",padding:"80px 10px"}}>
        <div style={{padding:'0 20px 10px'}}>
          <span>爱心币数额：</span>
          <span style={{color:"red",padding:'0 20px'}}>80</span>
          <Button type="primary" onClick={this.showLoveModal}>转赠</Button>
        </div>
        <List
          size="small"
          header={<div>收支明细</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <span style={{padding:'0 20px'}}>{item.time}</span>
              <span style={{padding:'0 20px'}}>{item.content}</span>
              <span style={{padding:'0 20px'}}>{item.num>0?`获得${item.num}`:`支出${-item.num}`}</span>
            </List.Item>
          )}
        />
        <Modal
          title="转赠爱心币"
          visible={this.state.showLoveModal}
          onOk={this.handleLoveOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleLoveCancel}
        >
          <Search
            placeholder="输入对方的手机号"
            enterButton="Search"
            onSearch={value => console.log(value)}
            style={{ width: 300 }}
          />
        </Modal>
      </div>
    )
  }
  render() {
    let login = sessionStorage.getItem("login");
    return (
      <div>
        <MyHeader login={false}  keyPath={['8']}/>
        
        {login ? this.renderCenter() : (this.state.loginV ? this.renderLogin() : this.renderRegister())}
        
        <div style={{float:"left",padding:"80px 10px"}}></div>
      </div>
    );
  }
}
export default Login;
{/*
*/} 