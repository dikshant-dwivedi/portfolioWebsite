import React from "react"
import { Card, Body, Image, Title, Description, Tags, Tag } from "./styles"

const ProjectCard = ({ cardData }) => {
  let { title, description, imgUrl, tags, srcUrl } = cardData

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  return (
    <Card
      className='tilt'
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={2000}
      gyroscope={false}
      scale={1.05}
      glareEnable={false}
      glareMaxOpacity={0.8}
      glareBorderRadius='15px'
    >
      <Image url={imgUrl} />
      <Body
        onClick={(e) => {
          openInNewTab(srcUrl)
        }}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>
      <Tags>
        {tags.map((tag, e) => (
          <Tag key={e}>{tag}</Tag>
        ))}
      </Tags>
    </Card>
  )
}

export default ProjectCard
