import React from "react";

import Context from "./contexts";
import dummyData from "../data/dummy-data";

const GlobalState = (props) => {
  const [data, setData] = React.useState([]);
  const [wistlists, setWistlists] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  //initialize data on app start
  React.useEffect(() => {
    setData(dummyData);
  }, []);

  // this is for wistlist
  const addWistlist = (item) => {
    const list = [...wistlists, item];
    setWistlists(list);
  };

  const deleteWishlist = (list_id) => {
    let list = wistlists;
    setWistlists(list.filter((list) => list.id !== list_id));
  };

  // the following is for cart
  const addToCart = (item) => {
    const list = [...cart, item];
    setCart(list);
  };

  const deleteFromCart = (list_id) => {
    let list = cart;
    setCart(list.filter((list) => list.id !== list_id));
  };

  return (
    <Context.Provider
      value={{
        data: data,
        setData: setData,
        wistlists: wistlists,
        addWistlist: addWistlist,
        deleteWishlist: deleteWishlist,
        cart: cart,
        addCart: addToCart,
        delFromCart: deleteFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
