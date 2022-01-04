import React from "react"
import {
  Container,
  Heading,
  SubHeading,
  HeadingContainer,
  SkillsSectionOne,
  SkillsSectionTwo,
  SkillsSectionThree,
  SkillsSectionFour,
  Card,
  CardTitle,
  CardBodyRowOne,
  CardBodyRowTwo,
  Skill,
  Icon,
  Description,
  ParallaxContainer,
} from "./styles.js"

import { FaNetworkWired, FaReact, FaCss3Alt } from "react-icons/fa"
import { GiMeshNetwork, GiArtificialIntelligence } from "react-icons/gi"
import { SiLeetcode, SiAzuredevops } from "react-icons/si"
import { BiCodeBlock } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { BsTools } from "react-icons/bs"
import { AiFillHtml5 } from "react-icons/ai"

const SkillsContainer = () => {
  return (
    <Container>
      <HeadingContainer>
        <ParallaxContainer
          className='tilt'
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={2000}
          gyroscope={false}
          glareEnable={true}
          glareMaxOpacity={1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <Heading>
            An excellent skillset developed through{" "}
            <span>shear hardwork, passion and intelligent practice</span>
          </Heading>
          <SubHeading>
            All through my Btech, I have tried to hone in practical skills that
            will prove vital for the industry. Simultaneously, I have done my
            best to build a solid foundation based on core academic concepts. A
            wise man once said, " Even for practical purposes theory generally
            turns out to be the most important thing in the end".
          </SubHeading>
        </ParallaxContainer>
      </HeadingContainer>
      <SkillsSectionOne>
        <ParallaxContainer
          className='tilt'
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={2000}
          gyroscope={false}
        >
          <Card>
            <CardTitle>CS Fundamentals</CardTitle>
            <CardBodyRowOne>
              <Skill>
                <Icon>
                  <BiCodeBlock />
                </Icon>
                <Description>
                  familiarity with C++, Java, Python and Javascript
                </Description>
              </Skill>
              <Skill>
                <Icon>
                  <SiLeetcode />
                </Icon>
                <Description>
                  Problem solving using data structures, algorithms and
                  complexity analysis
                </Description>
              </Skill>
            </CardBodyRowOne>
            <CardBodyRowTwo>
              <Skill>
                <Icon>
                  <GiMeshNetwork />
                </Icon>
                <Description>CCNA level networking experience</Description>
              </Skill>
              <Skill>
                <Icon>
                  <FaNetworkWired />
                </Icon>
                <Description>Object-oriented Paradigms</Description>
              </Skill>
              <Skill>
                <Icon>
                  <GrMysql />
                </Icon>
                <Description>Relational DBMS - MySQL</Description>
              </Skill>
            </CardBodyRowTwo>
          </Card>
        </ParallaxContainer>
      </SkillsSectionOne>
      <SkillsSectionTwo>
        <ParallaxContainer
          className='tilt'
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={2000}
          gyroscope={false}
        >
          <Card>
            <CardTitle>Development Skills</CardTitle>
            <CardBodyRowOne>
              <Skill>
                <Icon>
                  <AiFillHtml5 />
                </Icon>
                <Description>
                  HTML coding essentials and Best Practices (Semantics and
                  accessibility)
                </Description>
              </Skill>
              <Skill>
                <Icon>
                  <FaCss3Alt />
                </Icon>
                <Description>
                  CSS - in-depth knowledge of concepts like css grid, flexbox,
                  floats, transitions, etc.
                </Description>
              </Skill>
            </CardBodyRowOne>
            <CardBodyRowTwo>
              <Skill>
                <Icon>
                  <FaReact />
                </Icon>
                <Description>
                  Technical experience and Extensive knowledge of Mongodb,
                  Express, ReactJs and NodeJs
                </Description>
              </Skill>
              <Skill>
                <Icon>
                  <BsTools />
                </Icon>
                <Description>
                  Tools and Technologies I've worked with: Android studio,
                  VsCode, Firebase, Heroku, MySQL workbench, MongoDb Atlas
                </Description>
              </Skill>
            </CardBodyRowTwo>
          </Card>
        </ParallaxContainer>
      </SkillsSectionTwo>
      <SkillsSectionThree>
        <ParallaxContainer
          className='tilt'
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={2000}
          gyroscope={false}
        >
          <Card>
            <CardTitle>AI and ML</CardTitle>
            <Skill>
              <Icon>
                <GiArtificialIntelligence />
              </Icon>
              <Description>
                Learnt and practiced a variety of supervised and unsupervised
                learning algorithms
              </Description>
            </Skill>
          </Card>
        </ParallaxContainer>
      </SkillsSectionThree>
      <SkillsSectionFour>
        <ParallaxContainer
          className='tilt'
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={2000}
          gyroscope={false}
        >
          <Card>
            <CardTitle>Cloud Computing</CardTitle>
            <Skill>
              <Icon>
                <SiAzuredevops />
              </Icon>
              <Description>
                Microsoft Azure Certified: Azure Administrator Associate, Azure
                fundamentals, AI fundamentals, data fundamentals
              </Description>
            </Skill>
          </Card>
        </ParallaxContainer>
      </SkillsSectionFour>
    </Container>
  )
}

export default SkillsContainer
