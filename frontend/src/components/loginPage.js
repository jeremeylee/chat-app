import React from 'react';
import { Row, Form, Icon, Input, Button, Checkbox } from 'antd';
import './loginPage.css';


const LoginPage = (props) => {
  const { getFieldDecorator } = props.form
  return (
    <div className='container'>
      <Form className='login-form'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username' }],
          })(
            <Input
              prefix={<Icon type="user"/>}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password' }],
          })(
            <Input
              prefix={<Icon type="lock"/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Row>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Row>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(LoginPage);
