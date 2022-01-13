import React from "react";
import { Layout, Menu, Breadcrumb, Table} from "antd";



const style = { padding: "8px 0" };

const { SubMenu } = Menu;
const { Content } = Layout;




export default function Sellers() {

  var users = JSON.parse(localStorage.getItem("users"));
  const sellers = users.filter((d) => d.role === 'seller');

  const dataSource = sellers;

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

    
  return (
      
        <>
        <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Sellers</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table dataSource={dataSource} columns={columns} />
          </Content>
        </>
  );
}
