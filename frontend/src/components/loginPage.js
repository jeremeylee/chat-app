import React from 'react';
import { Row, Form, Icon, Input, Button, Checkbox } from 'antd';
import './loginPage.css';
import loginService from '../services/login';

const LoginPage = (props) => {
  const { getFieldDecorator, validateFields } = props.form
  
  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields(async (err, values) => {
      if(err) {
        console.log('Wrong values were entered');
      }
      
      const activeUser = await loginService.login(values);
      props.setActiveUser(activeUser);
    })
  }
  return (
    <div className='container'>
      <Form onSubmit={handleSubmit} className='login-form'>
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
{/*           {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
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
