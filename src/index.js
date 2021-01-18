import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouteApp from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NewOrder from "./pages/NewOrder";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <RouteApp exact path={"/neworder"} component={NewOrder} />
        <RouteApp exact path={"/products"} component={ProductsPage} />
        <RouteApp exact path={"/"} component={HomePage} />
      </Switch>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
