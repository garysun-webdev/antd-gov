import React from "react";
import { Row, Col } from "antd";

const Banner = props => (
  // <div className="home-banner">
  //   <div>
  //     <div className="gutter-example">
  //       <div className="gutter-example">
  //         <Row gutter={16}>
  //           <Col className="gutter-row" md={6}>
  //             <div className="banner-text">
  //               <p>{props.bannerText}</p>
  //             </div>
  //           </Col>
  //         </Row>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="home-banner">
    <div className="banner-text">
      <p>{props.bannerText}</p>
    </div>
  </div>
);

export default Banner;
