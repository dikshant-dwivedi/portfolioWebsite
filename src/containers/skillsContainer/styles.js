import styled from "styled-components/macro"
import Tilt from "react-parallax-tilt"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 1.05fr 1.05fr;
  grid-template-rows: 1.4fr 0.6fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "headingContainer skillSectionOne skillSectionTwo"
    "headingContainer skillSectionThree skillSectionFour";
  padding: 10px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.2fr 1.2fr 0.6fr;
    gap: 10px 10px;
    grid-template-areas:
      "headingContainer skillSectionOne"
      "headingContainer skillSectionTwo"
      "skillSectionThree skillSectionFour";
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.8fr 0.7fr;
    gap: 10px 10px;
    grid-template-areas:
      "headingContainer headingContainer"
      "skillSectionOne skillSectionTwo"
      "skillSectionThree skillSectionFour";
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.2fr 1.6fr 0.6fr 0.6fr;
    gap: 10px 10px;
    grid-template-areas:
      "headingContainer"
      "skillSectionOne"
      "skillSectionTwo"
      "skillSectionThree"
      "skillSectionFour";
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: headingContainer;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.txt};
`

export const SubHeading = styled.p`
  font-size: 0.9rem;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`
export const Heading = styled.h1`
  font-size: 2.2rem;
  margin-top: 0;
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
  @media screen and (max-width: 530px) {
    font-size: 1.7rem;
  }
`

export const SkillsSectionOne = styled.div`
  grid-area: skillSectionOne;
`
export const SkillsSectionTwo = styled.div`
  grid-area: skillSectionTwo;
`
export const SkillsSectionThree = styled.div`
  grid-area: skillSectionThree;
`
export const SkillsSectionFour = styled.div`
  grid-area: skillSectionFour;
`

export const ParallaxContainer = styled(Tilt)`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.5);
  border-left-color: rgba(255, 255, 255, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);

  :hover {
    backdrop-filter: blur(15px);
  }
`
export const Card = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const CardTitle = styled.h3`
  font-size: 2rem;
  margin: 0 0 5px 0;

  @media screen and (max-width: 1080px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 530px) {
    text-align: center;
  }
`

export const Skill = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.txt};
  //border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
    z-index: 400;
  }
`

export const CardBodyRowOne = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  margin-bottom: 5px;

  ${Skill} {
    margin-right: 5px;
  }

  ${Skill}:last-child {
    margin-right: 0px;
  }
`

export const CardBodyRowTwo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;

  ${Skill} {
    margin-right: 5px;
  }

  ${Skill}:last-child {
    margin-right: 0px;
  }
`

export const Icon = styled.div`
  flex: 1;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.txt};
  transition: color 0.5s ease-in-out;
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.9;

  @media screen and (max-width: 700px) {
    flex: 0.8;
  }
`
export const Description = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.txt};
  transition: color 0.5s ease-in-out;
  text-align: center;
  font-size: 0.85rem;
  margin: 0px;
  flex: 1.1;

  @media screen and (max-width: 700px) {
    flex: 1.2;
    font-size: 0.8rem;
  }
`
