import React from "react";

// const currentUser = React.createContext({
//     name: "user",
//     setName: (name) => {},

// });

export default React.createContext({
    data: [],
    setData: () => {},
    wistlists: [],
    addWistlist: () => {},
    deleteWishlist: () => {},
    cart: [],
    addCart: () => {},
    delFromCart: () => {},
});
