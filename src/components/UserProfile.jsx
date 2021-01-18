import React from "react";
import { Typography, Avatar, Divider } from "antd";

import dimens from "../constants/dimens";

const { Title } = Typography;

const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        padding: dimens.defaultPadding,
      }}
    >
      <Avatar
        size={60}
        src="https://64.media.tumblr.com/cd46b3f0f4883c6572b62fd6ce20b0e4/ac3c7b293552c55c-71/s400x600/2c20cf747c5ba170e0b57e0d2145027bdcd49c88.png"
      />
      <Typography>
        <Title level={3}>John Doe</Title>
      </Typography>
      <Divider style={{ margin: 0, padding: 0}} />
    </div>
  );
};

export default UserProfile;
