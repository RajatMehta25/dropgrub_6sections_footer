import React from "react";
import Carousel from "styled-components-carousel";
import { BsFillCaretRightFill } from "react-icons/bs";
import "./OurProducts.css";
import CardData from "./CardData";
// import Slider from "react-slick";

const OurProducts = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "",
          minHeight: "45vh",
          padding: "50px 0 50px 0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            font: "normal normal medium 32px/48px Poppins",
            padding: "20px 0 20px 0",
          }}
        >
          Our Products
        </h1>
        <div style={{ width: "60vw", margin: "0 auto" }}>
          <Carousel
            center
            infinite
            showArrows
            showIndicator
            breakpoints={[
              {
                size: 420,
                settings: {
                  slidesToShow: 1,
                  showArrows: false,
                  showIndicator: true,
                  swipeable: true,
                },
              },
              {
                size: 820,
                settings: {
                  slidesToShow: 2,
                  showArrows: true,
                  showIndicator: true,
                  swipeable: true,
                },
              },
              {
                size: 1245,
                settings: {
                  slidesToShow: 3,
                  showArrows: true,
                  showIndicator: true,
                  //  center: true,

                  swipeable: true,
                },
              },
            ]}
          >
            {CardData.map((item, index) => (
              <div
                key={index}
                style={{
                  // height: "300px",
                  // width: "200px",
                  backgroundColor: "",
                  // display: "flex",
                  // flexWrap: "wrap",
                  margin: "20px",
                  // flexDirection: "column",
                  borderRadius: "10px",
                  boxShadow: " 0px 0px 8px #00000033",
                }}
              >
                <div
                  style={{ overflow: "hidden", borderRadius: "5px 5px 0 0" }}
                >
                  <img
                    src={item.image}
                    alt="Loading"
                    style={{ borderRadius: "5px 5px 0 0", width: "100%" }}
                  />
                </div>
                <div>
                  <h2
                    style={{
                      padding: "5px",
                      font: "normal normal normal 20px/30px Poppins",
                    }}
                  >
                    {item.Heading}
                  </h2>
                  <p
                    style={{
                      padding: "5px",
                      wordBreak: "break-all",
                      color: "#696969",
                      font: "normal normal normal 15px/26px Poppins",
                    }}
                  >
                    {item.Description}
                  </p>
                  <a
                    href="!#"
                    style={{
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#2B3BF6",
                      font: "normal normal normal 15px/26px Poppins",
                    }}
                  >
                    {item.Link}{" "}
                    <BsFillCaretRightFill style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OurProducts;

// carousel code
