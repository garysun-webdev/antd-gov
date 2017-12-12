import React from "react";
import { Layout, Collapse, Row, Col } from "antd";
import Banner from "../UI/Banner";
import "./FAQ.css";
const { Content } = Layout;
const Panel = Collapse.Panel;

const text = `As the courier will arrive during business hours we recommend that you give us your work address or a friends business address.  From our experience this eliminates failed deliveries, reduces the shipping cost and you will end up getting your delivery sooner.  If you have no alternative we can deliver to your domestic/home address.`;

const FAQ = () => (
  <div>
    <Banner bannerText="Frequently Asked Questions" />

    <Content style={{ padding: "10px 16px", overflow: "initial" }}>
      <div className="grid-container">
        <Row gutter={16}>
          <Col className="gutter-row" md={16}>
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
                  key="3"
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
                  key="3"
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
                  key="3"
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
                  key="3"
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
                  key="3"
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
              </Collapse>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Collapse bordered={false} defaultActiveKey={["1"]}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  </div>
);

export default FAQ;
