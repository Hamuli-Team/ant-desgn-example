import React from "react";
import { Card, Space } from "antd";

function FixCard() {
  return (
    <Card style={{ padding: 0 }}>
      <Space style={{}}>
        <img
          src="https://freepngimg.com/thumb/juice/4-orange-juice-png-image.png"
          style={{ width: 115, height: 100 }}
        />
        <Space direction="vertical">
          <h4>This is title and this is</h4>
          <p>img elements must have an alt prop, either with meaningful text</p>
        </Space>
      </Space>
    </Card>
  );
}

export default FixCard;
