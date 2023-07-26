import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import SampleProjects from "./components/SampleProjects/Projects";
import Services from "./components/Service/Services";

import { LazyLoadComponent } from "react-lazy-load-image-component";

function App() {
  console.log("%cCreated by : Syed Mesam Ali", "color:#26bfa5;font-size:24px");
  console.log(
    "%cEmail : syedmesamali@gmail.com",
    "color:#26bfa5;font-size:14px"
  );
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LazyLoadComponent>
        <LightColor>
          <Projects />
        </LightColor>
      </LazyLoadComponent>
      <LazyLoadComponent>
        <SampleProjects />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <LightColor>
          <Clients />
        </LightColor>
      </LazyLoadComponent>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
