import React from "react";
import { Row, Col, Card, Icon, Layout, Carousel, Button, Input } from "antd";
import { Link } from "react-router-dom";
import Banner from "../UI/Banner";
import ChatBotIcon from "../Chatbot/ChatbotIcon";
import "./Home.css";
const { Content } = Layout;
const Search = Input.Search;

const Home = () => (
  <div>
    <Carousel>
      <div>
        <Row gutter={16}>
          <Col md={3} />
          <Col md={12}>
            <h2>Welcome to GOV.COM</h2>
            <h3>Please use our chatbot to find information</h3>
            <h3>
              <strong>Simple, faster, intelligent</strong>
            </h3>
            <Search
              placeholder="Search GOV.COM"
              onSearch={value => console.log(value)}
              enterButton="Search"
              style={{ marginTop: "10px" }}
            />
          </Col>
        </Row>
      </div>
    </Carousel>
    <Content>
      <div className="container-home">
        {/* <Affix
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
            </ul>
          </Affix> */}

        <Row gutter={16}>
          <ChatBotIcon />
          <Col className="gutter-row" md={3} />
          <Col className="gutter-row" md={6}>
            <ul>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" md={6}>
            <ul>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" md={6}>
            <ul>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <Card bordered={false} bodyStyle={{ padding: 5 }}>
                    <div className="card-title">
                      <h1>
                        <Icon type="tag-o" />This is a good part
                      </h1>
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
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" md={3} />
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" md={3} />
          <Col className="gutter-row" md={18}>
            <hr />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" md={3} />
          <Col className="gutter-row" md={6}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  src="https://s3-ap-southeast-2.amazonaws.com/garywebstore/jiangren/9235696-3x2-940x627.jpg"
                />
              </div>
              <div className="custom-card">
                <h2>
                  <Link to="/chart">Europe Street beat</Link>
                </h2>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" md={6}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  src="https://s3-ap-southeast-2.amazonaws.com/garywebstore/jiangren/9235696-3x2-940x627.jpg"
                />
              </div>
              <div className="custom-card">
                <h2>
                  <Link to="/chart">Europe Street beat</Link>
                </h2>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" md={6}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  src="https://s3-ap-southeast-2.amazonaws.com/garywebstore/jiangren/9235696-3x2-940x627.jpg"
                />
              </div>
              <div className="custom-card">
                <h2>
                  <Link to="/chart">Europe Street beat</Link>
                </h2>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" md={3} />
          <Col className="gutter-row" md={18}>
            <div className="article-button">
              <Button type="primary" size="large">
                View More Articles<Icon type="right" />
              </Button>
            </div>
            <hr />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" md={3} />
          <Col className="gutter-row" md={9}>
            <div className="article-button">
              <h1>GOV.COM</h1>
            </div>
          </Col>
          <Col className="gutter-row" md={9}>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </div>
    </Content>
  </div>
);

export default Home;
