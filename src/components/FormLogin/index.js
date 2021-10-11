import { Button, Checkbox, Form, Input, message } from 'antd'

import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Index = () => {
  const history = useHistory()
  const handleSubmit = (values) => {
    message.loading({ content: 'Loading...', key: 'login-msg' })

    setTimeout(async () => {
      if (values.email === 'admin@email.com' && values.password === 'admin1234') {
        message.success({ content: 'Login Success', key: 'login-msg' })
        await localStorage.setItem('isLogin', true)
        await history.push('/homepage')
      } else {
        message.error({ content: 'Login Failed', key: 'login-msg' })
      }
    }, 1500)
  }

  return (
    <LoginContainer>
      <TitleLogin>Login</TitleLogin>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          style={{ textAlign: 'left' }}
          label="Email:"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'อีเมล์ไม่ถูกต้อง !',
            },
          ]}
        >
          <CustomLogin placeholder="Email" />
        </Form.Item>
        <Form.Item
          style={{ textAlign: 'left' }}
          label="Password:"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <CustomLogin placeholder="Password" type="password" />
        </Form.Item>
        <Form.Item style={{ textAlign: 'left' }} name="remember">
          <Checkbox defaultChecked={true}>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" htmlType="submit">
            LOGIN
          </CustomButton>
        </Form.Item>
      </Form>
    </LoginContainer>
  )
}

export default Index

const CustomButton = styled(Button)`
  width: 260px;
  height: 52px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
`

const CustomLogin = styled(Input)`
  height: 45px;
  background: #fbf9f9;
  border-radius: 20px;
  border: none;
`

const TitleLogin = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: #383737;
`

const LoginContainer = styled.section`
  width: 600px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  text-align: center;
  padding: 120px 70px;
`
