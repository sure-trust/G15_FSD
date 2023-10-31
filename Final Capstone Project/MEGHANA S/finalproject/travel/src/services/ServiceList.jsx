import React from "react";
import ServiceCard from "./ServiceCard";
import { Col, Row } from "reactstrap";

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
       {
        imgUrl: weatherImg,
        title: "calculate weather",
        desc: "lorem ipsum doldr sit amet, consectetur adipisicing elit.",
       },
       {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "lorem ipsum doldr sit amet, consectetur adipisicing elit.",
        },
       {
        imgUrl: customizationImg,
        title: "customization",
        desc: "lorem ipsum doldr sit amet, consectetur adipisicing elit.",
       }
   ];

const ServiceList = () => {
  return (
    <Row>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ServiceList;
