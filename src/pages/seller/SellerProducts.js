import React, { useState } from "react";
import { Breadcrumb, Table, Space, Modal, Button, Input } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";

export default function SellerProducts() {
  
  const [isEditing, setIsEditing] = useState(false)
  const [editingProduct, setEditingProduct]=useState(null)
  
  const [dataSource, setDataSource] = useState([
    {
      
      id: 1,
      key:'1',
      name: "Apple",
      price: 32,
      quantity: 5,
      seller_id: 2,
    },
    {
      id: 2,
      key: '2',
      name: "Mango",
      price: 42,
      quantity: 5,
      seller_id: 2,
    },
    {
      id: 3,
      key: '3',
      name: "Orange",
      price: 32,
      quantity: 5,
      seller_id: 2,
    },
  ]);

  const columns = [
    {      
        key: "1",
        title: "Id",
        dataIndex: "id",
        key: "id",
        
      },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      key: "4",
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      key: "5",
      title: "Quantity",
      dataIndex: "quantity",
      key: "quentity",
    },
    ,
    {
      key: "6",
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={()=>{
              onEditProduct(record)
          }} /> |<DeleteOutlined onClick={()=>{
              onDeleteProduct(record)
          }} style={{color : "red"}}/>
        </Space>
      ),
    },
  ];


  const onAddProduct = () => {
    const newProduct = {      
      id: parseInt(Math.random() * 10),
      key:"5",
      name: "Grapes",
      price: "32",
      quantity: "5",
      seller_id: "2",
      
    };
    setDataSource((pre) => {
      return [...pre, newProduct];
    });
  };

  // Delete Product
  const onDeleteProduct = (record) => {
    Modal.confirm({
        title:"Are you sure, you want to delete this product record?",
        okText:"Yes",
        okType:"danger",
        onOk:()=>{
            setDataSource((pre)=>{
                return pre.filter((product)=> product.id !== record.id);
              });
        }
    })
    

  }

  //Edit Product
  const onEditProduct =(record) =>{
    setIsEditing(true)
    setEditingProduct({...record})
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {/* <AddProduct/> */}
        <Button onClick={onAddProduct}> Add Product</Button>
        <Table columns={columns} dataSource={dataSource} />
        <Modal 
        title="Edit Product"
        visible= {isEditing}
        okText="Save"
        onCancle={ ()=>{
          setIsEditing(false);
        }}
        onOk={ ()=>{
          setIsEditing(false);
        }}
        >
          <Input value={editingProduct?.name}/>
          <Input value={editingProduct?.price}/>
          <Input value={editingProduct?.quantity}/>            
        </Modal>

      </Content>
    </>
  );
}
