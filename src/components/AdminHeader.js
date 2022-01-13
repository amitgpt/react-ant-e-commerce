import React from "react";
import { toast } from "react-toastify";
import { Avatar, Image, Layout, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { SubMenu } = Menu;



const AdminHeader = ({ history }) => {

    var users = JSON.parse(localStorage.getItem("authuser"));
    let title = (!users && users[0].role=='admin') ? 'Admin' : 'Seller';

    const LockOut=()=>{
        localStorage.removeItem("authuser"); 
        history.push("/login");    
        toast.success("Logout success!");
    }

  return (
    <Header className="header">
      <div className="logo" style={{margin: '0 0 0 -35px',float:'left'}} ><a><h1 style={{ color: '#ffffff' }}>AGSHOP {title}</h1></a></div>

      <Menu theme="dark" mode="horizontal">
        <SubMenu key="SubMenu" icon={<UserOutlined />} title={title}>
          <Menu.Item key="Logout" icon={<LogoutOutlined />} onClick={() => LockOut()}>Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default AdminHeader;
