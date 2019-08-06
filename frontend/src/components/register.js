import React from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';
import './loginPage.css';
import loginService from '../services/login';

const Register = (props) => {
  const { getFieldDecorator, validateFields } = props.form
  
  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields(async (err, values) => {
      if(err) {
        console.log('Wrong values were entered');
      }
      
      const userCredentials = {
        username: values.username,
        password: values.password,
      }
      
      await loginService.register(userCredentials);
      props.setDisplayPage('LOGIN');
      
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
          <Row>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
          </Row>
      </Form>
    </div>
  );
};

export default Form.create()(Register);
