import React, { useEffect } from "react";
import image1 from "../assets/shoes1.avif";
import image2 from "../assets/shoes3.avif";
import image3 from "../assets/clothes2.avif";

const Carousel = () => {
  const slides = [
    {
      image: image1,
      title: "Step Up Your Style",
      description: "Discover the newest sneakers in town!",
    },
    {
      image: image2,
      title: "Unleash the Athlete in You",
      description: "Best sport shoes collection for all ages.",
    },
    {
      image: image3,
      title: "Trendy Apparel",
      description: "Wear what defines you.",
    },
  ];

  return (
    <div
      id="productCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner rounded shadow">
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}`}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="5000"
          >
            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{
                minHeight: "500px",
                backgroundColor: "gray",
              }}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.title}
                style={{
                  maxHeight: "100vh",
                  width: "500px",
                  margin: "0 auto",
                  objectFit: "cover",
                }}
              />

              <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-50"></div>

              <div
                className="carousel-caption text-center position-absolute start-50 translate-middle-x"
                style={{ bottom: "10%" }}
              >
                <h2 className="fw-bold text-white">{slide.title}</h2>
                <p className="text-white">{slide.description}</p>
                <button className="btn btn-light rounded-pill px-4 mb-3">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
