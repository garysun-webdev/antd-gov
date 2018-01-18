import React, { Component } from "react";
import { Input } from "antd";
var debounce = require("lodash.debounce");

class ChatInput extends Component {
  constructor(props) {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { msg: "" };
  }

  onInputChange(event) {
    this.setState({ msg: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.msg) {
      const msg = this.state.msg;
      this.setState({ msg: "" });
      this.props.pushMessage(msg);
      this.props.fetchMessage(msg);
    }
  }

  render() {
    return (
      <Input
        placeholder="press 'Enter' to send your message"
        value={this.state.msg}
        //onChange={(event)=>this.onInputChange(event)} />
        onChange={this.onInputChange}
        onPressEnter={this.onFormSubmit}
        size="large"
      />
    );
  }
}

export default ChatInput;
