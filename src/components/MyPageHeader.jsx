import React from "react";
import {
  Typography,
  Input,
  Space,
  Badge,
  Tooltip,
  Button,
  Grid,
  Avatar,
} from "antd";
import {
  BellOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import dimens from "../constants/dimens";
import contexts from "../contexts/contexts";

const { Title } = Typography;
const { Search } = Input;
const { useBreakpoint } = Grid;

const MyPageHeader = () => {
  const { wistlists, cart } = React.useContext(contexts);
  const screens = useBreakpoint();
  // const xs = screens.xs;
  console.log(screens);

  return (
    <div
      style={{
        height: 75,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "red",
        padding: dimens.defaultPadding,
        borderBottomStyle: 'solid',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      }}
    >
      {/* This is the logo go here */}
      <div
        style={{
          display: "flex",
          flex: 1,
          // backgroundColor: "green",
          height: 75,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src="https://www.dynadot.com/domain/logo/shop-logo1483672083.png"
            height={40}
          />

          <div style={{ display: "flex", alignItems: "center"}}>
            <Search
              style={{
                // marginTop: "5px",
                width: `${screens.xs ? "100%" : "500px"}`,
                marginLeft: 10,
                marginRight: 10,
              }}
              size="large"
              placeholder="Search in Shop"  
              onSearch={(kay) => alert(`Search key is ${kay}`)}
              enterButton
            />

            <Badge count={cart.length}>
              <Tooltip title="My Cart">
                <Button shape="circle" icon={<ShoppingCartOutlined />} />
              </Tooltip>
            </Badge>
          </div>
          <div />
        </div>
      </div>

      {/* <Divider
        type="vertical"
        style={{ backgroundColor: "green", height: "80%" }}
      /> */}

      <div
        style={{
          display: "flex",
          // flex: 2,
          // justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "blue",
          marginRight: "20px",
        }}
      >
        <Space size="middle">
          <Badge count={wistlists.length}>
            <Tooltip title="My Wistlist">
              <Button
                shape="circle"
                icon={
                  wistlists.length > 0 ? (
                    <HeartFilled style={{ color: "red" }} />
                  ) : (
                    <HeartOutlined />
                  )
                }
              />
            </Tooltip>
          </Badge>

          <Badge count={20}>
            <Tooltip title="Notifications">
              <Button shape="circle" icon={<BellOutlined />} />
            </Tooltip>
          </Badge>
        </Space>

        {/* <Badge count={20} title="Notifications"> */}
        {/* <Avatar
            size={40}
            src="https://64.media.tumblr.com/cd46b3f0f4883c6572b62fd6ce20b0e4/ac3c7b293552c55c-71/s400x600/2c20cf747c5ba170e0b57e0d2145027bdcd49c88.png"
            style={{ verticalAlign: "center" }}
          /> */}
        {/* <BellOutlined style={{ fontSize: 25 }} />
        </Badge> */}
        {/* <Typography>
          <Title level={3}>John Doe</Title>
        </Typography> */}
      </div>
    </div>
  );
};

export default MyPageHeader;
