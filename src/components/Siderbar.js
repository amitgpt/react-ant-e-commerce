import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const style = { padding: "8px 0" };

const { Sider } = Layout;

export default function Siderbar() {
  return (

      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="dashboard"><Link to="/admin/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key="seller"><Link to="/admin/sellers">Sellers</Link>Sellers</Menu.Item>
          <Menu.Item key="customer"><Link to="/admin/customers">Customers</Link></Menu.Item>
        </Menu>
      </Sider>
    
  );
}
