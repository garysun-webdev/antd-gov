import React from "react";

const UserMsg = props => {
  return (
    <div className="full">
      <div className="chatbot-userMsg">
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default UserMsg;
