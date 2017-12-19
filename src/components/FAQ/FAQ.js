import React from "react";
import { Layout, Collapse, Row, Col, Breadcrumb } from "antd";
import Banner from "../UI/Banner";
import ChatbotIcon from "../Chatbot/ChatbotIcon";

import "./FAQ.css";
const { Content } = Layout;
const Panel = Collapse.Panel;

const text = `As the courier will arrive during business hours we recommend that you give us your work address or a friends business address.  From our experience this eliminates failed deliveries, reduces the shipping cost and you will end up getting your delivery sooner.  If you have no alternative we can deliver to your domestic/home address.`;

const FAQ = () => (
  <div>
    <Banner bannerText="Frequently Asked Questions" />

    <Content style={{ padding: "10px 16px", overflow: "initial" }}>
      <div className="grid-container">
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>FAQ</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={16}>
          <Col className="gutter-row" md={1}>
            <div className="gutter-box" />
          </Col>
          <Col className="gutter-row" md={22}>
            <div className="gutter-box">
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                className="collapse-style"
              >
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="1"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="2"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="3"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="4"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="5"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="6"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="7"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="8"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="11"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="9"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="How much will the COLA amount be for 2018 and when will I receive it?"
                  key="10"
                  style={{ padding: "10px" }}
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col className="gutter-row" md={1}>
            <div className="gutter-box">
              {/* <ChatbotWithState /> */}
              <ChatbotIcon />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  </div>
);

export default FAQ;
