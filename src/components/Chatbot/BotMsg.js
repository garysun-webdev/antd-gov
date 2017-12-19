import React from "react";
import { Spin, Icon } from "antd";

const BotMsg = props => {
  if (props.text === "loading") {
    return (
      <div className="full">
        <div className="bot-spinning">
          <Spin size="small" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="full">
        <div className="bot">
          <Icon type="smile-o" className="avatar middle left" />
          <p>
            {props.text}
            <a href={props.url} target="_blank">
              {props.url}
            </a>
          </p>
        </div>
      </div>
    );
  }
  //   return (
  //     <div className="chatbot-botMsg">
  //       <Row>
  //         <Col md={2}>
  //           <div className="chatbot-avatar" />
  //         </Col>
  //         <Col md={14}>
  //           <Spin size="small" />
  //         </Col>
  //       </Row>
  //     </div>
  //   );
  // } else
  //   return (
  //     <div className="chatbot-botMsg">
  //       <Row>
  //         <Col md={2}>
  //           <div className="chatbot-avatar">
  //             <Icon type="smile-o" />
  //           </div>
  //         </Col>
  //         <Col md={14}>
  //           <div>
  //             {props.text}
  //             <a href={props.url} target="_blank">
  //               {props.url}
  //             </a>
  //           </div>
  //         </Col>
  //       </Row>
  //     </div>
  //   );
};

export default BotMsg;
