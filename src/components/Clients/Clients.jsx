import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import maleAvatar1 from "../../assets/profile-avatar/male/male_1.jpg";
import maleAvatar2 from "../../assets/profile-avatar/male/male_2.jpg";
import femaleAvatar1 from "../../assets/profile-avatar/female/female_1.jpg";
import femaleAvatar2 from "../../assets/profile-avatar/female/female_2.jpg";

let clients = [
  {
    name: "Stefano Diano",
    position: "Influencer",
    img_url: maleAvatar1,
    stars: 5,
    disc: `Ankita did a great and amazing job, very collaborative and for sure we will keep our cooperation. 
    Thank you very much for all you did I have appreciated it.`,
  },
  {
    name: "Hailey",
    position: "Artist",
    img_url: femaleAvatar1,
    stars: 5,
    disc: `Ankita is very professional and patience.
     She did pay attention to each minute detail. I'm overwhelmed by her service.`,
  },
  {
    name: "Prebentan",
    position: "Entrepreneur",
    img_url: maleAvatar2,
    stars: 5,
    disc: `Ankita did nice work and on time. Her punctuality and dedication for her work is praiseworthy.`,
  },
  {
    name: "Julian",
    position: "Content Creator",
    img_url: femaleAvatar2,
    stars: 5,
    disc: `Excellent work done by Ankita. 
    I have been her regular client and I can't thank her enough for her great work. `,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">testimonials</span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: var(---background);
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
