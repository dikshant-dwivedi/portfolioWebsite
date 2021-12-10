import React, { useState, useEffect } from "react"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import {
  Container,
  Section1,
  BackgroundImage,
  ContactSectionLeft,
  ContactSectionRight,
  ContactSectionMiddle,
  Title,
  SubTitle,
  ContactFormBox,
  ContactSection,
  ContactForm,
  SubmitButton,
  NameField,
  EmailField,
  SubjectField,
  MessageField,
  LinksContainer,
  InfoContainer,
  LinksRow,
  LinksColumn,
  AnimateIconLink,
  AnimateIconInfo,
  LinksText,
  LinksContactInfoRow,
  ContactInfoText,
} from "./styles"

import { FaFilePdf, FaAddressCard } from "react-icons/fa"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"

import {
  BsGithub,
  BsFillFileCodeFill,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs"

import { GrMail } from "react-icons/gr"

function Contact() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <Loader key='loader' />
        ) : (
          <Section1>
            <BackgroundImage />
            <ContactSection>
              <Title>Get in Touch</Title>
              {/*<SubTitle>
            Do you have any suggestions for me? Do you have any internship or
            job opportunities for me? Perhaps you have an awesome project idea
            to discuss, or you just want to say hello? Please send me a message
            and I will get back to you as soon as possible.
          </SubTitle>*/}
              <SubTitle>
                Do you have any suggestions, an internship or a job opportunity
                for me? Perhaps you have an awesome project idea to discuss, or
                you just want to say hello? Please send me a message and I will
                get back to you as soon as possible.
              </SubTitle>
              <ContactFormBox>
                <ContactSectionLeft>
                  <InfoContainer>
                    <LinksContactInfoRow>
                      <AnimateIconInfo
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <BsFillTelephoneFill />
                        <ContactInfoText>+91-8750748142</ContactInfoText>
                      </AnimateIconInfo>
                    </LinksContactInfoRow>
                    <LinksContactInfoRow>
                      <AnimateIconInfo
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <GrMail />
                        <ContactInfoText>
                          Dikshantdwivedi055@gmail.com
                        </ContactInfoText>
                      </AnimateIconInfo>
                    </LinksContactInfoRow>
                    <LinksContactInfoRow>
                      <AnimateIconInfo
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaAddressCard />
                        <ContactInfoText>Greater Noida, India</ContactInfoText>
                      </AnimateIconInfo>
                    </LinksContactInfoRow>
                  </InfoContainer>
                </ContactSectionLeft>
                <ContactSectionMiddle>
                  <LinksContainer>
                    <LinksRow>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <BsGithub />
                          <LinksText>Github Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaFilePdf />
                          <LinksText>Download Resume</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                    </LinksRow>
                    <LinksRow>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <BsFillFileCodeFill />
                          <LinksText>Coding Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <BsLinkedin />
                          <LinksText>Linkedin Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                    </LinksRow>
                  </LinksContainer>
                </ContactSectionMiddle>
                <ContactSectionRight>
                  <ContactForm>
                    <NameField
                      type='text'
                      placeholder='Name'
                      name='user_name'
                    />
                    <EmailField
                      type='text'
                      placeholder='Email'
                      name='user_email'
                    />
                    <SubjectField
                      type='text'
                      placeholder='Subject'
                      name='user_subject'
                    />
                    <MessageField rows='8' placeholder='Message' />
                    <SubmitButton
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Submit
                    </SubmitButton>
                  </ContactForm>
                </ContactSectionRight>
              </ContactFormBox>
            </ContactSection>
          </Section1>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Contact
