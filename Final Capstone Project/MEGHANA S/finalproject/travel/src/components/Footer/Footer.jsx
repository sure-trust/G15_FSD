import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login", // Fixed "Loin" to "Login"
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                commodi, enim.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-link">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick__links</h5>

            <ListGroup className="footer__quick-link">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem> 
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact </h5>

          <ListGroup className="footer__quick-link">
          
         <ListGroupItem className="ps-0 border-0 d-flex 
         align-items-center gap-3" >

          <h6 className="mb-0 d-flex align-item-center gap-2">
            <i class="ri-map-pin-line"></i> 
             Address
             </h6>
             <p className="mb-0">Bangalure, karnataka</p>
          </ListGroupItem> 
          
         <ListGroupItem className="ps-0 border-0 d-flex 
         align-items-center gap-3" >

          <h6 className="mb-0 d-flex align-item-center gap-2">
            <i class="ri-mail-line"></i> 
             Email:
             </h6>
             <p className="mb-0">meghanas1701@gmail.com</p>
          </ListGroupItem> 
          
         <ListGroupItem className="ps-0 border-0 d-flex 
         align-items-center gap-3" >

          <h6 className="mb-0 d-flex align-item-center gap-2">
            <i class="ri-map-pin-line"></i> 
             Phone:
             </h6>
             <p className="mb-0">+91 1234567898</p>
          </ListGroupItem>
          </ListGroup> 
          </Col>
          <Col lg='12' className="text-center pt-5">
            <p className="copyright">copyright{year},design and develpo by Muhibur Rahman. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
