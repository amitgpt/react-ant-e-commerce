import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, Input, Button, Select, Layout } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Content } = Layout;

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //const [loading, setLoading] = useState(false);

  var authusers = JSON.parse(localStorage.getItem("authuser"));
  var users = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (authusers) history.push("/");
    }
  }, [authusers, history]);

  const roleBasedRedirect = (same) => {
    //let same = JSON.parse(res);
    // check if intended
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (same[0].role === "admin") {
        history.push("/admin/customer");
      } else if (same[0].role === "seller") {
        history.push("/seller/produts");
      } else {
        history.push("/");
      }
    }
  };

  const onFinish = (values) => {
    //setLoading(true);
    try {
      if (users === null) {
        toast.error("no user found!");
      }

      const same = users.filter((d) => d.email === email);
      console.log("same :" + same);
      if (same.length !== 0) {
        console.log(same);
        if (same[0].password === password) {
          console.log("Home");

          localStorage.setItem("authuser", JSON.stringify(same));
          setEmail("");
          setPassword("");          
          toast.success("Login success!");
          roleBasedRedirect(same);
        } else {
          toast.error("wrong password");
        }
      } else {
        toast.error("The " + email + " does not exist!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      //setLoading(false);
    }
  };

  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <Form
        name="normal_login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item wrapperCol={{
          offset: 8,
          span: 8,
        }}
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input 
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{
          offset: 8,
          span: 8,
        }}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input 
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{
          offset: 8,
          span: 8,
        }}>
          <Button
            type="primary"
            htmlType="submit"
            className="Login-form-button"
          >
            Login
          </Button>
          Or <a href="/signup"> Register now!</a>
        </Form.Item>
      </Form>
    </Content>
  );
}
