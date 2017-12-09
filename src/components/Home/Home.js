import React from "react";
import Banner from "../UI/Banner";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div>
    <div className="gutter-example">
      <Row gutter={16}>
        <Col className="gutter-row" md={24}>
          <div className="gutter-box">
            <Banner />
          </div>
        </Col>
      </Row>
    </div>

    <div className="grid-container">
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Card title="Card1" bordered={false}>
                <Banner />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" md={6}>
            <Link to="/faq">
              <div className="gutter-box">
                <Card bordered={false}>
                  <div>
                    <h1>This is a good part</h1>
                  </div>
                  <div>
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </Card>
              </div>
            </Link>
          </Col>

          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Card title="Card1" bordered={false}>
                <Banner />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Card title="Card1" bordered={false}>
                <Banner />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
export default Home;
