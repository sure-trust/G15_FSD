import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/OfferCarousel.css"; 

const offers = [
  {
    id: 1,
    title: "Special Discount",
    description: "Get 20% off on selected items!",
    image: require("../assets/images/e16866103281471.5f495b42482b5.jpg"),
  },
  {
    id: 2,
    title: "Limited Time Offer",
    description: "Buy 2, Get 1 Free on all products!",
    image: require("../assets/images/Website-banner_figures.webp"),
  },
  // Add more offer objects as needed
];

const OfferCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={5000} // Set the interval between slides (in milliseconds)
    >
      {offers.map((offer) => (
        <div className="offer-slide" key={offer.id}>
          <img src={offer.image} alt={offer.title} />
          <div className="offer-details">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default OfferCarousel;
