import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Customers from "./pages/admin/Customers";
import Sellers from "./pages/admin/Sellers";
import AdminSiderbar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import SellerProducts from "./pages/seller/SellerProducts";
import SellerSiderbar from "./components/SellerSidebar";


function App() {
  var authusers = JSON.parse(localStorage.getItem("authuser"));
  if (authusers && authusers[0].role === "admin") {
    return (
      <>
        <Layout>
          <AdminHeader />
          <Layout>
            <AdminSiderbar />
            <ToastContainer />
            <Layout style={{ padding: "0 24px 24px" }}>
            <Switch>
              {/* <Route exact path="/admin/dashboard" component={Dashboard} /> */}
              <Route exact path="/admin/customers" component={Customers} />
              <Route exact path="/admin/sellers" component={Sellers} />
              <Route component={NotFound} />
            </Switch>
              
            </Layout>            
          </Layout>
        </Layout>
      </>
    );
  } else if (authusers && authusers[0].role === "seller") {
    return (
      <>
        <Layout>
          <AdminHeader />
          <Layout>
            <SellerSiderbar />
            <ToastContainer />
            <Layout style={{ padding: "0 24px 24px" }}>
        <Switch>          
          <Route exact path="/seller/products" component={SellerProducts} />
          <Route component={NotFound} />
        </Switch>
        </Layout>            
          </Layout>
        </Layout>
      </>
    );
  } else if (authusers && authusers[0].role === "customer") {
    return (
      <>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />          
          <Route component={NotFound} />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />          
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
