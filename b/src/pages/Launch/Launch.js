
import React from 'react';

import styles from './Launch.css';
import MyHeader from "../../components/MyHeader";
import Link from 'umi/link';
import {
  Form, Select, InputNumber, Switch, Radio, Input,
  Slider, Button, Upload, Icon, Rate, Checkbox,
  Row, Col, Card, Layout
} from 'antd';

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
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="姓名"
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label="类型"
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
            label="求助金额"
          >
            {getFieldDecorator('input-number', { initialValue: 1 })(
              <InputNumber min={1} />
            )}
            {/* <span className="ant-form-text"> machines</span> */}
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
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Layout>
    );
  }
}
export default MyFrom;
// export default function() {
  //   return (
    //     <Layout>
    //       <MyHeader login={false} keyPath={['7']}/>
    //       <div className={styles.wrap}>
    //         <Row gutter={24}>
    //           <Col span={8}>
    //             <Card title="资金求助" 
    //               className={styles.Card}
    //               bordered={false} 
    //               headStyle={{textAlign:"center"}} 
    //               bodyStyle={{textAlign:"center"}}
    //             >
    //               金钱类型爱心项目的发起
    //             </Card>
    //           </Col>
    //           <Col span={8}>
    //             <Card title="物资求助" className={styles.Card} bordered={false} headStyle={{textAlign:"center"}} bodyStyle={{textAlign:"center"}}>物品类型爱心项目的发起</Card>
    //           </Col>
    //           <Col span={8}>
    //             <Card title="服务求助" className={styles.Card} bordered={false} headStyle={{textAlign:"center"}} bodyStyle={{textAlign:"center"}}>服务类型爱心项目的发起</Card>
    //           </Col>
    //         </Row>
    //       </div>
    //     </Layout>
    //   );
    // }
    
    