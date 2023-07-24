import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineBars } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"Graphic Designer"}
            disc={`
            I've been working as a Freelance Graphic Designer for three years.
            I have customized Social media posts, reels and videos, designed Brand logos, business cards,
             Flyers, Brochure, letterheads and other business stationary for my clients' business 
            `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgWebsite}
            title={"Web Developer"}
            disc={`
            Websites help businesses grow by expanding their online presence, 
            reaching a broader audience, and providing a platform to showcase products or services, 
            ultimately increasing customer engagement and sales. I create potent websites for my clients
            `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={AiOutlineBars}
            title={"Brand Identity Creator"}
            disc={`
            Creating a brand identity is crucial as it helps businesses 
            differentiate themselves from competitors, and build recognition and trust among customers, 
            leading to increased brand loyalty and long-term success.
            `}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
