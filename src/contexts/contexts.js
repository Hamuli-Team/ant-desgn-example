import React from "react";

// const currentUser = React.createContext({
//     name: "user",
//     setName: (name) => {},

// });

export default React.createContext({
    wistlists: [],
    addWistlist: () => {},
    deleteWishlist: () => {},
    cart: [],
    addCart: () => {},
    delFromCart: () => {},
});
