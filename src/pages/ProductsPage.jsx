import React from "react";

import { Typography, Space} from "antd";

import ProductCard from "../components/ProductCard";
import data from "../data/dummy-data";
import dimens from "../constants/dimens";

const { Title } = Typography;

const ProductsPage = () => {
  return (
    <div style={{ padding: dimens.defaultPadding }}>
      <Typography>
        <Title level={3}>Products</Title>
      </Typography>
      <Space wrap={true}>
        {data.map((item) => (
          <ProductCard />
        ))}
      </Space>
    </div>
  );
};

export default ProductsPage;
