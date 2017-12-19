import React from "react";
import { Layout, Row, Col, Breadcrumb, Affix } from "antd";
import Banner from "../UI/Banner";
import ChatbotIcon from "../Chatbot/ChatbotIcon";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import BarChartMix from "./BarChartMix";
import RadarChart from "./RadarChart";
import "./Charts.css";

const { Content } = Layout;
const Charts = () => (
  <div>
    <Banner bannerText="Data Virtualization" />
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
              </ul>
            </Affix>
            <Row gutter={16}>
              <div className="pageTitle">
                <h1>
                  The Best City for Immigration in Australia Based on Tweets
                </h1>
                <p>
                  Tweets data in Australia are harvested from Twitter, the
                  number of which is about 430,000. These data will help
                  immigrants to decide which city in Australia is most suitable
                  for moving in. There are five candidates in scope, which are
                  Sydney, Melbourne, Brisbane, Adelaide and Perth.
                </p>
              </div>
              <div className="chart-title">
                <h2 id="stage1">
                  <span>Happiness Index vs City Size</span>
                  <a href="#stage1">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={7}>
                <div className="gutter-box chart-text">
                  <p>
                    The sentiment value of each tweet is generated. Then the
                    percentage of positive tweets is used to define the
                    Happiness Index for each city
                  </p>
                  <p>Results:</p>
                  <ul>
                    <li>
                      1. People in larger cities are less happy than those in
                      small cities.
                    </li>
                    <li>2. Brisbane and Adelaide are two better choices</li>
                  </ul>
                </div>
              </Col>
              <Col md={17}>
                <BarChart />
              </Col>
            </Row>
            <hr />

            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage2">
                  <span>Popularity of Immigration Related Hot Topics</span>
                  <a href="#stage2">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={7}>
                <div className="gutter-box chart-text">
                  <p>
                    If more people in one place talk about a topic, people their
                    care more about this topic and further they have a closer
                    connection to this topic. Therefore, we used dictionaries to
                    filter all the tweets and get the number of topice related
                    tweet. Then the percentage of them is shown.
                  </p>
                  <p>Results:</p>
                  <ul>
                    <li>
                      1. Adelaide is the hottest immigration city in Australia.
                    </li>
                    <li>
                      2. Brisbane is more balanced than others in these three
                      topics.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={17}>
                <PieChart />
              </Col>
            </Row>
            <hr />

            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage3">
                  <span>People's Attitude towards These Topics</span>
                  <a href="#stage3">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={7}>
                <div className="gutter-box chart-text">
                  <p>
                    The sentiment values of topic related tweets are calculated
                    and accumulated. From that, we get NP (Net Positive) value,
                    which can be used to indicate people's attitudes towards
                    these topics.
                  </p>
                  <p>Results:</p>
                  <ul>
                    <li>
                      1. Most people share positive attitudes in Adelaide.
                    </li>
                    <li>2. Brisbane and Adelaide are two better choices</li>
                  </ul>
                </div>
              </Col>
              <Col md={17}>
                <BarChartMix />
              </Col>
            </Row>
            <hr />

            <Row gutter={16}>
              <div className="chart-title">
                <h2 id="stage4">
                  <span>City Styles in Australia</span>
                  <a href="#stage4">#</a>
                </h2>
              </div>
              <Col className="gutter-row" md={7}>
                <div className="gutter-box chart-text">
                  <p>
                    Although cities have different attitudes towards
                    immigration, people still need to find a city which suits
                    their life-styles. We analysized the word frequency of
                    tweets in each city and categorized them in sit groups.
                  </p>
                  <p>Results:</p>
                  <ul>
                    <li>
                      1. People in Australia like to talk about politics
                      (Hottest Word: Trump).
                    </li>
                    <li>
                      2. Melbourne is popular in topics of culture(music, arts)
                      and weather.
                    </li>
                    <li>
                      3. People in Brisbane and Adelaide enjoy more of nature
                      and sports.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={17}>
                <RadarChart />
              </Col>
            </Row>
            <hr />
          </div>
        </div>
      </div>
    </Content>
  </div>
);

export default Charts;
