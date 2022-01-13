import React from "react";
import { Layout, Table, Breadcrumb } from "antd";

const { Content } = Layout;

export default function Customers() {
  
  var users = JSON.parse(localStorage.getItem("users"));
  const customers = users.filter((d) => d.role === 'customer');

  const dataSource = customers;

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
        <Breadcrumb.Item>Customer</Breadcrumb.Item>
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
