import React from "react";
import { Spin, Icon } from "antd";

const BotMsg = props => {
  return (
    <div className="full">
      {props.text === "loading" ? (
        <div className="bot-spinning">
          <Spin size="small" />
        </div>
      ) : (
        <div className="bot">
          <Icon type="smile-o" className="avatar middle left" />
          <p>
            {props.text}
            <a href={props.url} target="_blank">
              {props.url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default BotMsg;
