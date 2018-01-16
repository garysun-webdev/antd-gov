import React, { Component } from "react";
import "./App.css";
import HeaderCustom from "./components/HeaderCustom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Charts from "./components/Charts";

import { Layout } from "antd";
const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router basename="/antd-gov/">
        <Layout className="layout">
          <HeaderCustom />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/chart" component={Charts} />
          </Switch>
          <Footer style={{ textAlign: "center" }}>
            GOC.COM ©2017 Created by garysun.au@gmail.com
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
