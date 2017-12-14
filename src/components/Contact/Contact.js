import React from "react";
import Banner from "../UI/Banner";
import WizardForm from "../Form/WizardForm";
import { Layout, Collapse, Row, Col, Card } from "antd";
import showResults from "../Form/showResults";
const { Content } = Layout;

const Contact = () => {
  return (
    <div>
      <Banner bannerText="Welcome to contact us" />
      <Content style={{ padding: "10px 16px", overflow: "initial" }}>
        <div className="grid-container">
          <Row gutter={16}>
            <Col className="gutter-row" md={12}>
              <div className="gutter-box">
                <Card title="Contact us by filling the form!" bordered={false}>
                  <WizardForm onSubmit={showResults} />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
};
export default Contact;
