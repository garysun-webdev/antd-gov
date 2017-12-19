import React, { Component } from "react";
import ChatInput from "./ChatInput";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";
import "./Chatbot.css";

// import ChatMsg from "./ChatMsg";

class Chatbot extends Component {
  componentDidUpdate() {
    this.refs.node.scrollTop = this.refs.node.scrollHeight;
    console.log(this.refs.node.scrollTop);
    console.log(this.refs.node.scrollHeight);
  }

  // refScroll(node) {
  //   this.node = node;
  // }

  render() {
    return (
      <div className="chatbot">
        <div className="chatbot-content" ref="node">
          {this.props.msgFlow.map(msg => {
            if (msg.sender === "bot")
              return <BotMsg key={msg.id} text={msg.data} url={msg.url} />;
            else return <UserMsg key={msg.id} text={msg.data} />;
          })}
        </div>

        <div>
          <ChatInput
            pushMessage={this.props.pushMessage}
            fetchMessage={this.props.fetchMessage}
          />
        </div>
      </div>
    );
  }
}

export default Chatbot;
