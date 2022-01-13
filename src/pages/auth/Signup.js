import React, { useState } from "react";
import { Form, Input, Button, Select, Layout } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Option } = Select;

export default function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  var users = JSON.parse(localStorage.getItem("users"));

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(email);

    if (users === null) {
      users = [
        {
          key: "1",
          username: "admin",
          email: "admin@agshop.com",
          password: "admin@50",
          role: "admin",
        },
        {
          key: "2",
          username: "seller",
          email: "seller@agshop.com",
          password: "seller@50",
          role: "seller",
        },
        {
          key: "3",
          username: "amit",
          email: "amit50@agshop.com",
          password: "amit@50",
          role: "customer",
        },
      ];
    }

    const same = users.filter((d) => d.email === email);

    if (same.length === 0) {
      users = [
        ...users,
        {
          key: '4',
          username: username,
          email: email,
          password: password,
          role: values.role,
        },
      ];
      localStorage.setItem("users", JSON.stringify(users));

      setUserName("");
      setEmail("");
      setPassword("");
      setRole("");
    } else {
      alert(username + " exist!");
    }
  };

  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        name="normal_registration"
        className="registration-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="role"
          rules={[{ required: true, message: "Please select your role!" }]}
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Select name="role" placeholder="Please select a role">
            <Option value="customer">Customer</Option>
            <Option value="seller">Seller</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            Register
          </Button>
          Or <a href="/login"> Login now!</a>
        </Form.Item>
      </Form>
    </Content>
  );
}
