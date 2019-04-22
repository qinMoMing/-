
import React from 'react';

import styles from './Launch.css';
import MyHeader from "../../components/MyHeader";
import Link from 'umi/link';
import {
  Form, Select, InputNumber, Switch, Radio, Input,
  Slider, Button, Upload, Icon, Rate, Checkbox, Modal,
  Row, Col, Card, Layout, DatePicker,
} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const { TextArea } = Input;
const { Option } = Select;

@Form.create({ name: 'validate_other' })
class MyFrom extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Layout>
        <MyHeader login={false} keyPath={['7']}/>
        <Modal
          visible={false}
        >
          <div className={styles.wrap}>
            <Row gutter={24}>
              <Col span={8}>
                <Card title="资金求助" 
                  className={styles.Card}
                  bordered={false} 
                  headStyle={{textAlign:"center"}} 
                  bodyStyle={{textAlign:"center"}}
                >
                  金钱类型爱心项目的发起
                </Card>
              </Col>
              <Col span={8}>
                <Card title="物资求助" className={styles.Card} bordered={false} headStyle={{textAlign:"center"}} bodyStyle={{textAlign:"center"}}>物品类型爱心项目的发起</Card>
              </Col>
              <Col span={8}>
                <Card title="服务求助" className={styles.Card} bordered={false} headStyle={{textAlign:"center"}} bodyStyle={{textAlign:"center"}}>服务类型爱心项目的发起</Card>
              </Col>
            </Row>
          </div>
        </Modal>
        
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{padding:'140px'}}>
          <Form.Item
            label="受助人姓名"
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
            label="受助人身份证号"
          >
            {getFieldDecorator('beneficiary_idcard', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="受助人类型"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="受助人地址"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="受助人联系方式"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="爱心类型"
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="选择爱心类型">
                <Option value="school">助学</Option>
                <Option value="hospital">助医</Option>
                <Option value="baby">助养</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            label="项目名"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true,}],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="项目详情"
          >
            {getFieldDecorator('desc', {
              rules: [{ required: true,}],
            })(
              <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2 }} />
            )}
          </Form.Item>
          <Form.Item
            label="求助金额"
          >
            {getFieldDecorator('input-number', { initialValue: 1 })(
              <InputNumber min={1} />
            )}
            {/* <span className="ant-form-text"> machines</span> */}
          </Form.Item>
          <Form.Item
            label="开始时间"
          >
            {getFieldDecorator('start-time',)(
              <DatePicker onChange={this.onChange} />
            )}
          </Form.Item>
          <Form.Item
            label="结束时间"
          >
            {getFieldDecorator('end-time')(
              <DatePicker onChange={this.onChange} />
            )}
          </Form.Item>
          <Form.Item
            label="支付账户类型"
          >
            {getFieldDecorator('payment_account_type', {
              rules: [{ required: true,}],
            })(
              <Input placeholder="payment_account_type" />
            )}
          </Form.Item>
          <Form.Item
            label="支付账户号码"
          >
            {getFieldDecorator('payment_account_no', {
              rules: [{ required: true,}],
            })(
              <Input placeholder="payment_account_no" />
            )}
          </Form.Item>

          

          {/* <Form.Item
            label="Upload"
            extra="longgggggggggggggggggggggggggggggggggg"
            >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item> */}

          {/* <Form.Item
            label="Dragger"
            >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
              )}
            </div>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{ span: 12, offset: 6 }}
            >
            <Button type="primary" htmlType="submit">发起项目</Button>
          </Form.Item>
        </Form>
      </Layout>
    );
  }
}
export default MyFrom;
{/*
*/}
    

