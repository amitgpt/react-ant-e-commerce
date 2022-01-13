import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const style = { padding: "8px 0" };

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Dashboard() {
  return (
    <>
      
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dshboard</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          ckdmsdklv
        </Content>
      
    </>
  );
}
