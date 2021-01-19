import {
  Card,
  Space,
  Image,
  notification,
  Modal,
  Rate,
  Typography,
  Pagination,
  Divider,
  InputNumber,
  Tooltip,
  Button,
} from "antd";
import React from "react";

import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import contexts from "../contexts/contexts";
import CardToCart from "./CardToCart";

const { Meta } = Card;
const { Title } = Typography;

const ProductCard = ({ item }) => {
  const { addWistlist, deleteWishlist, addCart } = React.useContext(contexts);
  const [amount, setAmount] = React.useState(0);
  const [isAdded, setIsAdded] = React.useState(false);
  const [add2Cart, setAdd2Cart] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  function showNoti(status, message) {
    if (status === "success") {
      notification.success({
        placement: "bottomRight",
        message: message,
        duration: 4,
      });
    } else if (status === "warning") {
      notification.warning({
        placement: "bottomRight",
        message: message,
        duration: 4,
      });
    }
  }

  return (
    <Card
      style={{ width: "100%" }}
      cover={
        <img
          src={item.imgUrl}
          style={{ backgroundColor: "red", height: 200 }}
        />
      }
      actions={[
        <Space
          onClick={() => {
            if (!isAdded) {
              addWistlist(item);
              showNoti("success", `${item.title} is added to your wistlist.`);
              // alert(`${item.title} is added to wistlist`);
              setIsAdded(true);
            } else {
              // Modal.confirm({
              //   title: `${item.title} is already added!`,
              //   content: "Do you want to remove from your wistlist?",
              //   icon: <ExclamationCircleOutlined />,
              //   centered: true,
              //   onOk() {
              //     deleteWishlist(item.id);
              //     setIsAdded(false);
              //   },
              // });
              deleteWishlist(item.id);
              showNoti(
                "warning",
                `${item.title} is removed from your wistlist.`
              );
              setIsAdded(false);
            }
          }}
        >
          {isAdded ? (
            <HeartFilled color="red" key="wistlist" style={{ color: "red" }} />
          ) : (
            <HeartOutlined key="wistlist" />
          )}
          Wistlist
        </Space>,

        <Space
          onClick={() => {
            if (!add2Cart) {
              setShowModal(true);
              // addCart(item);
              // setAdd2Cart(true);
            } else {
              alert("already added");
            }
          }}
        >
          <ShoppingCartOutlined key="cart" />
          Add to Cart
        </Space>,
      ]}
    >
      <div
        style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
      >
        <Rate
          style={{ fontSize: 15 }}
          allowHalf
          value={item.rating}
          disabled={true}
        />
        <Typography>
          <Title level={4}>${"12.00"}</Title>
        </Typography>
      </div>
      <Meta title={item.title} description={item.desc} />

      <Modal
        visible={showModal}
        onOk={() => setShowModal(!showModal)}
        onCancel={() => setShowModal(!showModal)}
        centered
        footer={null}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 2,
              marginRight: 5,
            }}
          >
            <Image src={item.imgUrl} placeholder />
            <Pagination />
          </div>

          <div
            style={{
              display: "flex",
              flex: 3,
              justifyContent: "flex-start",
              // alignItems: "flex-start",
              marginLeft: 5,
              flexDirection: "column",
            }}
          >
            <Typography>
              <Title level={4}>{item.title}</Title>
            </Typography>

            <Rate style={{ fontSize: 20 }} disabled value={item.rating} />
            <Typography>
              <Title level={5}>Brand: TopOne Company</Title>
            </Typography>
            <Divider style={{ margin: 5 }} />

            <Space align="baseline">
              <Typography>
                <Title level={5}>Price: 500 MMK</Title>
              </Typography>
              <span>30%Off</span>
            </Space>

            <Space style={{ marginTop: 10 }}>
              <Tooltip title="Decrease">
                <Button
                  type="primary"
                  icon={<MinusOutlined />}
                  onClick={() => setAmount((amt) => amt - 1)}
                />
              </Tooltip>
              <InputNumber
                min={0}
                max={10}
                defaultValue={0}
                value={amount}
                onChange={(val) => setAmount(val)}
                style={{ width: 60 }}
              />
              <Tooltip title="Increase">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setAmount((amt) => amt + 1)}
                />
              </Tooltip>
            </Space>

            <Space align="center" style={{ marginTop: 10 }}>
              <Button
                type="primary"
                size="large"
                icon={<MoneyCollectOutlined />}
              >
                Buy Now
              </Button>
              <Button
                type="secondary"
                size="large"
                icon={<ShoppingCartOutlined />}
                onClick={() => {
                  addCart(item);
                  setShowModal(false);
                  showNoti("success", "Added to your Cart.");
                }}
              >
                Add to Cart
              </Button>
            </Space>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default ProductCard;
