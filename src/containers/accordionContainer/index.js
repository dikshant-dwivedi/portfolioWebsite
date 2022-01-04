import React, { useState } from "react"
import {
  RightSide,
  LeftSide,
  Container,
  ArrowIcon,
  Header,
  Item,
  Title,
  Content,
} from "./styles"
import { accordionContent } from "./accordionContent"

const AccordionContainer = () => {
  //const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = (e, i) => {
    if (activeIndex === i) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(i)
    }
  }

  return (
    <Container>
      <LeftSide>
        {accordionContent.map(({ title, content }, i) => (
          <Item open={activeIndex === i}>
            <Header
              open={activeIndex === i}
              onClick={(e) => toggleAccordion(e, i)}
            >
              <Title>{title}</Title>
              <ArrowIcon open={activeIndex === i} />
              {/*<PlusContainer open={activeIndex === i}>
                <Plus open={activeIndex === i} />
        </PlusContainer>*/}
            </Header>
            <Content open={activeIndex === i}>{content}</Content>
          </Item>
        ))}
      </LeftSide>
      <RightSide />
    </Container>
  )
}

export default AccordionContainer
