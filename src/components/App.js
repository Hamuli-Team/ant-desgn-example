import React from "react";

import { Route } from "react-router-dom";

import Layout from "./layout";

const App = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default App;
