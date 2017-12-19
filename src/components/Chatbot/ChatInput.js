import React, { Component } from "react";
import { Input } from "antd";
var debounce = require("lodash.debounce");

class ChatInput extends Component {
  constructor(props) {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = debounce(this.onFormSubmit.bind(this), 1000);
    this.state = { msg: "" };
  }

  onInputChange(event) {
    this.setState({ msg: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.msg) {
      this.props.pushMessage(this.state.msg);
      this.props.fetchMessage(this.state.msg);
      this.setState({ msg: "" });
    }
  }

  render() {
    return (
      // <form onSubmit={this.onFormSubmit} className="input-group">
      <Input
        placeholder="press 'Enter' to send your message"
        value={this.state.msg}
        //onChange={(event)=>this.onInputChange(event)} />
        onChange={this.onInputChange}
        onPressEnter={this.onFormSubmit}
        size="large"
      />

      // <span className="input-group-btn">
      //   <button className="btn btn-primary" type="submit">
      //     Submit
      //   </button>
      // </span>
      // </form>
    );
  }
}

export default ChatInput;
