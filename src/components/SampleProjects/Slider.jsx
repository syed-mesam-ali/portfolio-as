import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
// video imports
import web_1 from "../../assets/sample-projects/video/web_1.mp4";
import spa_1 from "../../assets/sample-projects/video/spa_1.mp4";
// images imports
import website_1 from "../../assets/sample-projects/images/website_1.jpg";
import beautySpa_1 from "../../assets/sample-projects/images/beautySpa_1.jpg";
import beautySpa_2 from "../../assets/sample-projects/images/beautySpa_2.jpg";
import beautySpa_3 from "../../assets/sample-projects/images/beautySpa_3.jpg";
import beautySpa_4 from "../../assets/sample-projects/images/beautySpa_4.jpg";
import burger_1 from "../../assets/sample-projects/images/burger_1.jpg";
import cake_1 from "../../assets/sample-projects/images/cake_1.jpg";

let data = [
  {
    video: web_1,
  },
  {
    video: spa_1,
  },
  {
    img: website_1,
    disc: "Click on the link to vist the Live Demo.",
    demo: "https://gerichtdeutch.netlify.app/",
  },
  {
    img: beautySpa_1,
  },
  {
    img: beautySpa_2,
  },
  {
    img: beautySpa_3,
  },
  {
    img: beautySpa_4,
  },
  {
    img: burger_1,
  },
  {
    img: cake_1,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
