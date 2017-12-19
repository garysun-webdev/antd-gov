import React from "react";
import { Affix, Popover, Button } from "antd";
import ChatbotWithState from "../../containers/ChatbotWithState";

const popContent = (
  <div className="popContent">
    <ChatbotWithState />
  </div>
);

const ChatbotIcon = () => {
  return (
    <Affix
      offsetBottom={50}
      style={{ position: "fixed", bottom: 50, right: 50 }}
    >
      <Popover placement="topRight" content={popContent} trigger="click">
        <Button size="large" shape="circle" type="danger" icon="smile-o" />
      </Popover>
    </Affix>
  );
};

export default ChatbotIcon;
