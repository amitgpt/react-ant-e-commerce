import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, LogoutOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

//import { authcheck } from "../Middleware/authcheck";

const { SubMenu } = Menu;

const registerStyle = { position: "absolute", top: 0, right: 20 };
const loginStyle = { position: "absolute", top: 0, right: 110 };
//console.log(authcheck);
const Header = ({history}) => {
  //console.log("authcheck" + authcheck);
  const [current, setCurrent] = useState("");
  
  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link to="/products">Product</Link>
      </Menu.Item>
            
      <Menu.Item
        key="signup"
        icon={<UserAddOutlined />}
        className="register-link"
        style={registerStyle}
      >
        <Link to="/signup">Signup</Link>
      </Menu.Item>
      <Menu.Item
        key="login"
        icon={<UserOutlined />}
        className="login-link"
        style={loginStyle}
      >
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
