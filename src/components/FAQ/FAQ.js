import React from "react";
import {
  Layout,
  Collapse,
  Row,
  Col,
  Breadcrumb,
  Affix,
  Icon,
  Pagination
} from "antd";
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
          <Breadcrumb.Item>Data Virtualization</Breadcrumb.Item>
        </Breadcrumb>
        <div className="background-white">
          <div className="container-white">
            <ChatbotIcon />
            <Affix
              offsetTop={10}
              style={{ position: "absolute", top: 40, right: 30 }}
            >
              <ul className="affix-nav">
                <li>
                  <a href="#stage1">Step One</a>
                </li>
                <li>
                  <a href="#stage2">Step Two</a>
                </li>
                <li>
                  <a href="#stage3">Step Three</a>
                </li>
                <li>
                  <a href="#stage4">Step Four</a>
                </li>
                <li>
                  <a href="#stage5">Step Four</a>
                </li>
              </ul>
            </Affix>
            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage1">
                  <span>Payment and Business</span>
                  <a href="#stage1">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={24}>
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
                    <p className="faq-panel-footer">
                      <span>
                        <Icon type="like-o" />
                      </span>
                      <span style={{ marginRight: "8px" }}>156</span>
                      <span>
                        <Icon type="dislike-o" />
                      </span>
                      <span>23</span>
                    </p>
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
                </Collapse>
              </Col>
            </Row>

            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage2">
                  <span>Payment and Business</span>
                  <a href="#stage2">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={24}>
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
              </Col>
            </Row>

            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage3">
                  <span>Payment and Business</span>
                  <a href="#stage3">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={24}>
                <Collapse bordered={false} className="collapse-style">
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
              </Col>
            </Row>
          </div>
          <div className="article-button">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </Content>
  </div>
);

export default FAQ;
