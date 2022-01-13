import React, { useState } from "react";
import { Modal, Button } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

export default function AddProduct() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusCircleOutlined />}
        style={{ float: "right", margin: "0 10px 10px 5px" }}
      >
        Add Products
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}        
        onCancel={handleCancel}
      >
        
      </Modal>
    </>
  );
}
