import { Col, Row } from "antd";
import React from "react";
import ItemProducts from "../components/ItemProducts";
import data from "../data/productData";

const Products = () => {
  return (
    <>
      <h1 >All Items</h1>
      <div className="site-card-wrapper">
    <Row gutter={16} style={{margin: "0 0 0 128px"}}>
      
      {data.productData.map((item, map) => {
        return (
          <Col span={100}>
          <ItemProducts
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            seller_id={item.seller_id}
            pid={item.id}
          />
          </Col>
        );
      })}
      
      </Row>
      </div>
    </>
  );
};

export default Products;
