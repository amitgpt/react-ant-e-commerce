import { Card, Avatar, Image, Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons'
import React from "react";

const { Meta } = Card;

const ItemProducts = (props) => {
  return (   
    <Card hoverable cover={
            <Image
              alt={props.img}
              src={props.img}
            />
          }style={{ width: 300 }}>
      {/* <div className="row"> */}
      <h3>{props.title} </h3> 
      <p> &#8377; {props.price} / KG </p>
      <Button icon={<ShoppingCartOutlined />}>Add To Cart</Button>
      {/* </div> */}
      
      <p></p>      
    </Card>

  );
};

export default ItemProducts;
