import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const style = { padding: "8px 0" };

const { Sider } = Layout;

const SellerSiderbar = () => {
  return (

    <Sider width={200} className="site-layout-background">
    <Menu theme="dark"
      mode="inline"
      defaultSelectedKeys={["seller"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >      
      <Menu.Item key="seller"><Link to="/seller/products">Manage Products</Link></Menu.Item>      
    </Menu>
  </Sider>
    
  );
}

export default SellerSiderbar;
