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
  Result,
} from "./styles"

import { FaFilePdf, FaAddressCard } from "react-icons/fa"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

import {
  BsGithub,
  BsFillFileCodeFill,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs"

import { GrMail } from "react-icons/gr"

function Contact() {
  const [loading, setLoading] = useState(true)
  const [startRendering, setStartRendering] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const colorError = "#ff3333"
  const colorSuccess = "#42ba96"
  const [res, setRes] = useState({ text: "", type: colorError })

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2500)
      setStartRendering(true)
    }, 1000)
  }, [])

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        "#contact-form",
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setRes({
            text: "Thanks! I will connect with you shortly.",
            type: colorSuccess,
          })
        },
        (error) => {
          setRes({
            text: error.text,
            type: colorSuccess,
          })
        }
      )
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!name || !email || !subject || !message) {
      setRes({ text: "Please fill all the fields.", type: colorError })
      return
    }
    if (!isEmailValid(email)) {
      setRes({ text: "Please fill a valid email.", type: colorError })
      return
    }
    setRes({ text: "", type: colorError })
    sendEmail()
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence exitBeforeEnter>
        {loading && <Loader key='loader' />}
      </AnimatePresence>
      {startRendering && (
        <>
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
                        onClick={() => {
                          navigator.clipboard.writeText("+918750748142")
                        }}
                        data-tip
                        data-for='copyMobile'
                      >
                        <BsFillTelephoneFill />
                        <ContactInfoText>+91-8750748142</ContactInfoText>
                      </AnimateIconInfo>
                    </LinksContactInfoRow>
                    <LinksContactInfoRow>
                      <AnimateIconInfo
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "Dikshantdwivedi055@gmail.com"
                          )
                        }}
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
                        onClick={() => {
                          navigator.clipboard.writeText("Greater Noida, India")
                        }}
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
                          onClick={(e) =>
                            openInNewTab("https://github.com/dikshant-dwivedi")
                          }
                        >
                          <BsGithub />
                          <LinksText>Github Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => openInNewTab("/assets/resume.pdf")}
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
                          onClick={(e) =>
                            openInNewTab(
                              "https://www.interviewbit.com/profile/dikshant-dwivedi"
                            )
                          }
                        >
                          <BsFillFileCodeFill />
                          <LinksText>Coding Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                      <LinksColumn>
                        <AnimateIconLink
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) =>
                            openInNewTab(
                              "https://www.linkedin.com/in/dikshant-dwivedi/"
                            )
                          }
                        >
                          <BsLinkedin />
                          <LinksText>Linkedin Profile</LinksText>
                        </AnimateIconLink>
                      </LinksColumn>
                    </LinksRow>
                  </LinksContainer>
                </ContactSectionMiddle>
                <ContactSectionRight>
                  <ContactForm id='contact-form' onSubmit={submitHandler}>
                    <NameField
                      type='text'
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <EmailField
                      type='text'
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <SubjectField
                      type='text'
                      placeholder='Subject'
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <MessageField
                      rows='8'
                      placeholder='Message'
                      name='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <SubmitButton
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      type='submit'
                    >
                      Submit
                    </SubmitButton>
                    <Result textColor={res.type}>{res.text}</Result>
                  </ContactForm>
                </ContactSectionRight>
              </ContactFormBox>
            </ContactSection>
          </Section1>
        </>
      )}
    </Container>
  )
}

export default Contact
