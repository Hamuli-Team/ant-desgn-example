import {
  Avatar,
  Divider,
  PageHeader,
  Typography,
  Input,
  Space,
  Badge,
  Tooltip,
  Button,
} from "antd";
import {
  ProjectOutlined,
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import dimens from "../constants/dimens";

const { Title } = Typography;
const { Search } = Input;

const MyPageHeader = () => {
  return (
    // <PageHeader
    //   className="site-page-header"
    //   onBack={() => null}
    //   title="Title"
    //   backIcon={<ProjectOutlined/>}
    //   subTitle="This is a subtitle"
    //   style={{display: 'flex'}}
    // />
    <div
      style={{
        height: 75,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "red",
        padding: dimens.defaultPadding,
      }}
    >
      {/* This is the logo go here */}
      <div
        style={{
          display: "flex",
          flex: 1,
          paddingTop: "16px",
          // backgroundColor: "green",
          height: 75,
        }}
      >
        <Space size="large" align="center">
          <Typography>
            <Title level={1}>LOGO</Title>
          </Typography>

          <Search
            style={{ marginTop: "5px" }}
            placeholder="input search text"
            onSearch={(kay) => alert(`Search key is ${kay}`)}
            enterButton
          />
        </Space>
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
          <Badge count={2}>
            <Tooltip title="My Cart">
              <Button shape="circle" icon={<ShoppingCartOutlined />} />
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
