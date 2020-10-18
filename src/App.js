import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Auth from "./Pages/Auth/Auth.component";
import Register from "./Pages/Register/Register.component";
import Login from "./Pages/Login/Login.component";
import Dashboard from "./Pages/Dashboard/Dashboard.component";
import BusinessPage from "./Pages/BusinessPage/Business.component";
import MyBusinessPage from "./Pages/MyBusinessPage/MyBusinessPage.component";
import Cart from "./Pages/Cart/Cart.component";
import MyBusinessPage2 from "./Pages/MyBusinessPage2/MyBusinessPage2.component";
import MyBusinessPage3 from "./Pages/MyBusinessPage3/MyBusinessPage3.component";
import MyBusinessPage4 from "./Pages/MyBusinessPage4/MyBusinessPage4.component";
import MyBusinessPage5 from "./Pages/MyBusinessPage5/MyBusinessPage5.component";
import MyBusinessPage6 from "./Pages/MyBusinessPage6/MyBusinessPage6.component";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/projects">
          <BusinessPage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/business/mySmallBusiness1">
          <MyBusinessPage />
        </Route>
        <Route exact path="/business/mySmallBusiness2">
          <MyBusinessPage2 />
        </Route>
        <Route exact path="/business/mySmallBusiness3">
          <MyBusinessPage3 />
        </Route>
        <Route exact path="/business/mySmallBusiness4">
          <MyBusinessPage4 />
        </Route>
        <Route exact path="/business/mySmallBusiness5">
          <MyBusinessPage5 />
        </Route>
        <Route exact path="/business/mySmallBusiness6">
          <MyBusinessPage6 />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
