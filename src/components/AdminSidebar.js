import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const style = { padding: "8px 0" };

const { Sider } = Layout;

const AdminSiderbar = () => {
  return (

    <Sider width={200} height={688} className="site-layout-background">
    <Menu theme="dark"
      mode="inline"
      defaultSelectedKeys={["customer"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="customer"><Link to="/admin/customers">Customers</Link></Menu.Item>
      <Menu.Item key="seller"><Link to="/admin/sellers">Sellers</Link></Menu.Item>      
    </Menu>
  </Sider>
    
  );
}

export default AdminSiderbar;
