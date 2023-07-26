import React from "react";
import styled from "styled-components";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { GiEarthAmerica } from "react-icons/gi";
// import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import hero from "../../assets/profile-image/profileImg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Ankita Singh</h1>
          <h3>Graphic Designer And Website Developer</h3>
          <p>
            Thanks for reaching me here. I have outclass expertise in various
            fields of graphic design and website development which helps me to
            create 'Potential Branding'.
          </p>
          <button>
            <a
              className="remove-a-decorations"
              href="mailto:contact.businessas@gmail.com"
            >
              Let's talk
            </a>
          </button>
          {/* <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="#">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social> */}
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <LazyLoadImage alt="profile" src={hero} />
          {/* <img
            src={"https://i.ibb.co/NjDgz9J/profile-Img.webp"}
            alt="profile"
          /> */}
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  .remove-a-decorations {
    text-decoration: none;
    color: unset;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
// const Social = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   p {
//     font-size: 0.9rem;
//     @media (max-width: 690px) {
//       font-size: 0.7rem;
//     }
//   }

//   .social-icons {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     span {
//       width: 2.3rem;
//       height: 2rem;
//       clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//       background-color: #01be96;
//       position: relative;
//       transition: transform 400ms ease-in-out;
//       :hover {
//         transform: rotate(360deg);
//       }
//     }

//     a {
//       color: #fff;
//       position: absolute;
//       top: 55%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//   }
// `;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
