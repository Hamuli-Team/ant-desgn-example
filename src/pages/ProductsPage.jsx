import React from "react";

import { Typography, Space, Pagination, Row, Col } from "antd";

import ProductCard from "../components/ProductCard";
import data from "../data/dummy-data";
import dimens from "../constants/dimens";

const { Title } = Typography;

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

const ProductsPage = () => {
  return (
    <div style={{ padding: dimens.defaultPadding}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          <Title level={1}>Products</Title>
        </Typography>

        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </div>
      {/* <div  style={{diplay: 'flex', justifyContent: 'space-around', flex: 1, backgroundColor: 'red'}}> */}
      <Row gutter={[5, 10]} justify="flex-start">
        {data.map((item) => (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
            xxl={{ span: 4 }}
            key={item.id}
          >
            <ProductCard item={item}/>
          </Col>
        ))}
      </Row>
      {/* </div> */}
    </div>
  );
};

export default ProductsPage;
