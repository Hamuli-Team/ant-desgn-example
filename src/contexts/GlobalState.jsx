import React from "react";

import Context from "./contexts";

const GlobalState = (props) => {
  const [wistlists, setWistlists] = React.useState([]);
  const [cart, setCart] = React.useState([]);

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
