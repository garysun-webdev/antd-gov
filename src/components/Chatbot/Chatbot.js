import React, { Component } from "react";

class Chatbot extends Component {
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
    this.props.pushMessage(this.state.msg);
    this.props.fetchMessage(this.state.msg);

    this.setState({ msg: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="...ask the chatbot here..."
          className="form-control"
          value={this.state.msg}
          //onChange={(event)=>this.onInputChange(event)} />
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default Chatbot;
