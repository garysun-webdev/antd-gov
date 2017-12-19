import React from "react";
import Banner from "../UI/Banner";
import WizardForm from "../Form/WizardForm";
import ChatbotIcon from "../Chatbot/ChatbotIcon";
import {
  Layout,
  Collapse,
  Row,
  Col,
  Card,
  Breadcrumb,
  Button,
  Icon
} from "antd";
import showResults from "../Form/showResults";
import GoogleMap from "../GoogleMap";
import "./Contact.css";
const { Content } = Layout;

const Contact = () => {
  return (
    <div>
      <Banner bannerText="Welcome to contact us" />
      <Content style={{ padding: "10px 16px", overflow: "initial" }}>
        <div className="grid-container">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Contact</Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={16}>
            <Col className="gutter-row" md={1} />
            <Col className="gutter-row" md={11}>
              <div className="gutter-box">
                <Card title="Contact us by filling the form!" bordered={false}>
                  <WizardForm onSubmit={showResults} />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" md={11}>
              <div className="gutter-box">
                <Card bordered={false}>
                  <div className="contact-detail">
                    <ul>
                      <li>
                        <Icon type="phone" />
                        <strong> Phone: </strong>
                        0466841926
                        <a href="tel:61466841926">
                          <Button>CALL US</Button>
                        </a>
                      </li>
                      <li>
                        <Icon type="mail" />
                        <strong> Email: </strong>
                        garysun.au@gmail.com
                        <a href="mailto:garysun.au@gmail.com">
                          <Button>MAIL US</Button>
                        </a>
                      </li>
                      <li>
                        <Icon type="environment-o" />
                        <strong> Address: </strong>
                        220 Spencer St, Melbourne VIC 3000
                        <a
                          target="_blank"
                          href="https://www.google.com.au/maps/dir//220+Spencer+St,+Melbourne+VIC+3000%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A/@-37.8155794,144.9508855,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6ad65d4ee2d152c5:0x38a0908dae999c56!2m2!1d144.9530742!2d-37.8155837"
                        >
                          <Button>GET DIRECTIONS</Button>
                        </a>
                      </li>

                      <li>
                        <div>
                          <GoogleMap lat={-37.815584} lon={144.953074} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" md={1}>
              <ChatbotIcon />
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
};
export default Contact;
