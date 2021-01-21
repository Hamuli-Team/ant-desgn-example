import React from "react";

import { Typography, Space, Pagination, Row, Col } from "antd";

import ProductCard from "../components/ProductCard";
import dimens from "../constants/dimens";
import contexts from "../contexts/contexts";
import MyDropdown from "../components/MyDropdown";

const { Title } = Typography;

const ProductsPage = () => {
  const { data } = React.useContext(contexts);
  const [currentData, setCurrentData] = React.useState([]);
  const [tempData, setTempData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [category, setCategory] = React.useState("all");
  const pageSize = 12;

  // React.useEffect(() => {
  //   alert("get render");
  // }, []);

  React.useEffect(() => {
    if (tempData.length > pageSize) {
      const curtItems = cutData(tempData);
      setCurrentData(curtItems);
    } else {
      setCurrentData(tempData);
    }
  }, [currentIndex, tempData]);

  React.useEffect(() => {
    if (category !== "all") {
      let d = data.filter((dt) => dt.category === category);
      setTempData(d);
      // alert(tempData.length);
    } else {
      // alert(data.length);
      setTempData(data);
    }
  }, [category, data]);

  function cutData(da) {
    const indexOfLastItem = currentIndex * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = da.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  }

  function changeCategory(cat) {
    setCategory(cat);
  }

  function onShowSizeChange(current, pageSize) {
    setCurrentIndex(current);
    // alert(current + "-" + pageSize);
    // console.log(current, pageSize);
  }

  return (
    <div style={{ padding: dimens.defaultPadding }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          <Title level={1}>Products</Title>
        </Typography>

        <Space>
          <MyDropdown onCatChange={changeCategory} />

          <Pagination
            // showSizeChanger
            onChange={onShowSizeChange}
            defaultCurrent={1}
            pageSize={12}
            total={tempData.length}
            responsive={true}
          />
        </Space>
      </div>
      {/* <div  style={{diplay: 'flex', justifyContent: 'space-around', flex: 1, backgroundColor: 'red'}}> */}
      <Row gutter={[5, 10]} justify="flex-start">
        {currentData.map((item) => (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
            xxl={{ span: 4 }}
            key={item.id}
          >
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
      {/* </div> */}
    </div>
  );
};

export default ProductsPage;
