import React from "react";
import Formation from "./Formation";
import { Carousel } from 'react-bootstrap';

const Formations = () => {
  return (
    <div className="formations component__space" id="Formations">
      <div className="container">
      <h1 className="about__heading">Nos Formations</h1>
      <div className="container">
        <div className="row">
          <Formation />


        </div>
      </div>
      {/* <Carousel pause='hover'>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src="http://dealka.tn/wp-content/uploads/2017/07/photo-facebook-V4-min.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src="https://cdn.stayhappening.com/events5/banners/ef9a42910a436272290acf35df87349295bf02f30c50358b362073d14c67dbfa-rimg-w526-h276-gmir.jpg?v=1622865484" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src="http://www.interface.tn/images/Formation-Tunisie-interface1.jpg" alt="" />
        </Carousel.Item>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Formations;
