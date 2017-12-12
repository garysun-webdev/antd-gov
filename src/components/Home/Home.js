import React from "react";
import Banner from "../UI/Banner";
import { Row, Col, Card, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";
const { Content } = Layout;

const Home = () => (
  <div>
    <div className="home-banner">
      <div>
        <div className="gutter-example">
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" md={6}>
                <div className="banner-text">
                  <p>Govement Service and Information</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>

    <Content style={{ padding: "0 16px", overflow: "initial" }}>
      <div className="grid-container">
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>

      <div className="grid-container">
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                      <img
                        alt="example"
                        width="100%"
                        src="https://s3-ap-southeast-2.amazonaws.com/garywebstore/jiangren/9235696-3x2-940x627.jpg"
                      />
                    </div>
                    <div className="custom-card">
                      <h3>Europe Street beat</h3>
                      <p>www.instagram.com</p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>

            <Col className="gutter-row" md={6}>
              <Link to="/faq">
                <div className="gutter-box">
                  <Card bordered={false} style={{ margin: "10px 0" }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />
                      </h1>
                      <h1>This is a good part</h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  </div>
);

export default Home;
