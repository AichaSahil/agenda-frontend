import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
// import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/agenda.jpeg";
import User2Img from "../../assets/pictures/agenda.jpeg";
import User3Img from "../../assets/pictures/agenda.jpeg";
import User4Img from "../../assets/pictures/agenda.jpeg";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>Ce que les autres disent de nous</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="Rdv-AH  est vraiment la meilleure application pour prendre rendez-vous"
              username="Mohamed Salim"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="Rdv-AH  est vraiment la meilleure application pour prendre rendez-vous"
              username="Mohamed Salim"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="Rdv-AH est vraiment la meilleure application pour prendre rendez-vous"
              username="Mohamed Salim"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="Rdv-AH  est vraiment la meilleure application pour prendre rendez-vous"
              username="Mohamed Salim"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}