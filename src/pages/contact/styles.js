import styled from "styled-components"
import { motion } from "framer-motion"
import contactFormBg from "./../../assets/images/contactFormBg.jpg"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  background-color: #ffeedb;
  height: calc(100vh - 51px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  position: relative;
`

export const Section1 = styled.div`
  height: calc(100vh - 50px);
  background-image: ${({ theme }) => theme.contactFormBg};
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }

  transition: background-image ease-in-out 0.3s;
`

export const Section2 = styled.div`
  height: 100vh;
  background-color: #61c9a8;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`

export const Section3 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`
export const BackgroundImage = styled.div`
  position: absolute;
  height: calc(100vh - 50px);
  width: 100%;
  background-image: url(${contactFormBg});
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.contactFormImgBg};
  background-size: cover;
  clip-path: polygon(0 0, 78% 0, 23% 100%, 0% 100%);
  background-color: #7eb5a6;
  transition: background-color ease-in-out 0.3s;
`

export const ContactSection = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.txt};
  margin: 0;
  font-size: 3rem;
`

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.txt};
  text-align: center;
  width: 90%;
  font-size: 0.9rem;
  white-space: pre-wrap;
`

export const ContactFormBox = styled.div`
  border: 2px solid ${({ theme }) => theme.txt};
  display: flex;
  width: 90%;
  height: 70%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
export const ContactSectionLeft = styled.div`
  flex: 1;
  padding: 2rem 1rem;
`
export const ContactSectionMiddle = styled.div`
  flex: 1;
  padding: 2rem 1rem;
`

export const ContactSectionRight = styled.div`
  flex: 2;
`
export const ContactForm = styled.form`
  padding: 2rem 1rem;
`

export const NameField = styled.input`
  margin-bottom: 15px;
  height: 20px;
  font-size: 0.8rem;
  display: inline-block;
  min-width: 150px;
  width: 50%;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.txt};
  color: ${({ theme }) => theme.txt};
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.txt};
  }
`

export const EmailField = styled.input`
  margin-bottom: 15px;
  display: block;
  height: 20px;
  font-size: 0.8rem;
  min-width: 150px;
  width: 50%;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.txt};
  color: ${({ theme }) => theme.txt};
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.txt};
  }
`

export const SubjectField = styled.input`
  margin-bottom: 15px;
  display: block;
  height: 20px;
  font-size: 0.8rem;
  min-width: 150px;
  width: 50%;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.txt};
  color: ${({ theme }) => theme.txt};
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.txt};
  }
`

export const MessageField = styled.textarea`
  margin-bottom: 15px;
  display: block;
  font-size: 0.8rem;
  height: 155px;
  min-width: 150px;
  width: 100%;
  background-color: transparent;
  resize: none;
  border: 1.5px solid ${({ theme }) => theme.txt};
  color: ${({ theme }) => theme.txt};

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.txt};
  }

  ::placeholder {
    color: ${({ theme }) => theme.txt};
  }

  :focus {
    outline: none;
  }
`

export const SubmitButton = styled(motion.div)`
  font-size: 0.8rem;
  font-weight: 600;
  width: 80px;
  height: 30px;
  align-item: center;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  color: ${({ theme }) => theme.bgBody};
  background-color: ${({ theme }) => theme.txt};

  :hover {
    cursor: pointer;
  }
`

export const LinksContainer = styled.div`
  width: 100%;
  height: 80%;
  min-width: 230px;
  margin: 5% 0 10% 5%;
`

export const LinksColumn = styled.div`
  float: left;
  width: 50%;
  height: 100%;
`

export const LinksRow = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }
  width: 100%;
  height: 50%;
`
export const AnimateIconLink = styled(motion.div)`
  font-size: 3rem;
  cursor: pointer;
  display: inline-block;
  margin: 25% 25%;
  text-align: center;
`

export const LinksText = styled.p`
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
  font-weight: 600;
`

export const LinksContactInfoRow = styled.div`
  width: 100%;
  margin-left: 5%;
  height: 25%;
  :nth-of-type(3) {
    height: 50%;
  }
`
export const AnimateIconInfo = styled(motion.div)`
  font-size: 1.3rem;
  cursor: pointer;
  display: inline-block;
  margin-top: 12%;
  text-align: center;
`

export const ContactInfoText = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-left: 5px;
  position: relative;
  bottom: 5px;
`

export const InfoContainer = styled.div`
  width: 100%;
  min-width: 256px;
  height: 80%;
  margin: 15% 0 5% 5%;
`
