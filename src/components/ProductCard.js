import { Card, Row, Col } from "antd";
import React from "react";

import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ProductCard = (item) => {
  return (
    <Row>
      <Col span="24">
        <Card
          key={item.id}
          style={{ width: 260 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
      </Col>
    </Row>
  );
};

export default ProductCard;
