import React, { Component } from "react";
import "./App.css";
import HeaderCustomWithState from "./containers/HeaderCustomWithState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Charts from "./components/Charts";

import { Layout } from "antd";
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <HeaderCustomWithState />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/chart" component={Charts} />
          </Switch>
          <Footer style={{ textAlign: "center" }}>I'm GOV</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
