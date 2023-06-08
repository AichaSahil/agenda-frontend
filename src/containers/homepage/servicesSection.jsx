import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

// import Service1Img from "../../assets/illustrations/web_development_.png";
// import Service2Img from "../../assets/illustrations/mobile_phone.png";
// import Service3Img from "../../assets/illustrations/bug_fixed.png";

import Service1Img from "../../assets/illustrations/agenda.jpeg";
import Service2Img from "../../assets/illustrations/agenda.jpeg";
import Service3Img from "../../assets/illustrations/agenda.jpeg";
const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Meilleur service de qualité</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Services entièrement intégrés"
        description="Rdv-AH est la solution de prise de rendez-vous en ligne qui vous permet prendre RDV en temps réel"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Services entièrement intégrés"
        description="Rdv-AH, la solution la plus adaptée pour répondre à vos besoins"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Services entièrement intégrés"
        description="Rdv-AH, la solution la plus adaptée pour répondre à vos besoins"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}