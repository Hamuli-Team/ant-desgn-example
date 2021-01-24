import React from "react";

import { Space, Typography, Button } from "antd";
import Carousel from "react-elastic-carousel";

import contexts from "../contexts/contexts";

import ProductCard from "../components/ProductCard";
import FixCard from "../components/home/FixCard";

const { Title } = Typography;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

const HomePage = () => {
  const { data } = React.useContext(contexts);

  const [item, setItem] = React.useState([
    {
      id: 1,
      title: "item #1",
      desc:
        "React Hook React.useEffect has a missing dependency: cutData. Either include it or remove the dependency array",
      imgUrl:
        "https://lh3.googleusercontent.com/proxy/E-5_6RJBfTfOEgtxdAmaO7sJ6oaQSKrtU4tq6mFmf4i_VOD8lu8G8PeXfhNx5mq591BAFqBpEsoOOvV1qhBh1cUKI1NOjviJ4g90ZKDy0JNl-euq3XyDmboGEe6SRfcZBfHZPYCoYoV8O_-U0XLSQsdugw",
    },
    {
      id: 2,
      title: "item #2",
      desc:
        "React Hook React.useEffect has a missing dependency: cutData. Either include it or remove the dependency array",
      imgUrl:
        "https://lh3.googleusercontent.com/proxy/-2KjBJWjMy84yXVqQoTVbFcPIyxTp2wQDJB4d_yusrjzVdF1Z87irCf367G1PgGNXZWvmhiMdNLPjHiBUmT8qy1KrviSyNqLiPglSMUUHbxlYeouR6EpTbxH",
    },
    {
      id: 3,
      title: "item #3",
      desc:
        "React Hook React.useEffect has a missing dependency: cutData. Either include it or remove the dependency array",
      imgUrl:
        "https://lh3.googleusercontent.com/proxy/OqtYuSPefIllqI8SSsE-PIp6-6kzKqh_FNj7REhGvCC_QLrg2HQblhO2aDXgI_XDmxgMCCr5aWO84YywE6WAXkexmK1zw-F-Ss_apxcmcYaUpAg",
    },
    // { id: 4, title: "item #4" },
    // { id: 5, title: "item #5" },
  ]);
  // const [currentData, setCurrentData] = React.useState([]);

  // React.useEffect(() => {
  //   let dt = data.filter((it) => it.category === "cat2");
  //   setCurrentData(dt);
  // }, [data]);

  return (
    <>
      <div style={{ backgroundColor: "white", padding: 10 }}>
        <Carousel enableAutoPlay autoPlaySpeed={5000} showArrows={false}>
          {item.map((itm) => (
            <div
              key={itm.id}
              style={
                {
                  // display: "flex",
                  // flex: 1,
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              }
            >
              <Space size="medium">
                <div style={{ width: 200 }}>
                  <Space direction="vertical">
                    <Typography>
                      <Title level={2}>{itm.title}</Title>
                    </Typography>

                    <Typography>
                      <Title level={5}>{itm.desc}</Title>
                    </Typography>

                    <Button>Shop Now</Button>
                  </Space>
                </div>

                <div>
                  <img src={itm.imgUrl} style={{ width: 400, height: 300 }} />
                </div>
              </Space>
            </div>
          ))}
        </Carousel>
      </div>

      <Space style={{ margin: 10 }}>
        <FixCard />
        <FixCard />
        <FixCard />
        <FixCard />
      </Space>

      {/* <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item> */}

      {/* Featured products */}
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
        <div style={{ textAlign: "center" }}>
          <Typography>
            <Title level={2}>New Products</Title>
          </Typography>
        </div>
        {/* <Space direction="horizontal" style={{display: 'flex', backgroundColor: "blue"}}> */}
        <Carousel
          itemPadding={[10, 15]}
          breakPoints={breakPoints}
          renderPagination={({ pages, activePage, onClick }) => {
            return <></>;
          }}
        >
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
          {/* </Space> */}
        </Carousel>
      </div>

      {/* Featured Products */}
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
        <div style={{ textAlign: "center" }}>
          <Typography>
            <Title level={2}>Featured Products</Title>
          </Typography>
        </div>
        {/* <Space direction="horizontal" style={{display: 'flex', backgroundColor: "blue"}}> */}
        <Carousel
          itemPadding={[10, 15]}
          breakPoints={breakPoints}
          renderPagination={({ pages, activePage, onClick }) => {
            return <></>;
          }}
        >
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
          {/* </Space> */}
        </Carousel>
      </div>

      <img src="https://www.lithospos.com/storage/app/media/fruits-vegetables-pos-banner.jpg" style={{width: '100%', height: 'auto'}}/>

      <Space style={{ margin: 10 }}>
        <FixCard />
        <FixCard />
        <FixCard />
      </Space>

      <footer>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </>
  );
};

export default HomePage;
