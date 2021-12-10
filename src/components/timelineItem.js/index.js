import React from "react"
import {
  ItemWrapper,
  ItemContent,
  Tag,
  TimeDuration,
  Title,
  DescriptionList,
  ListItem,
  Description,
  Link,
  Circle,
} from "./styles.js"

const TimelineItem = ({ data }) => {
  return (
    <ItemWrapper>
      <ItemContent whileHover={{ scale: 1.03 }}>
        <Tag color={data.category.color}>{data.category.tag}</Tag>
        <TimeDuration>{data.duration}</TimeDuration>
        <Title>{data.title}</Title>
        {data.description.type === "list" ? (
          <DescriptionList>
            {data.description.text.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </DescriptionList>
        ) : (
          <Description></Description>
        )}
        {data.link && (
          <Link href={data.link.url} target='_blank' rel='noopener noreferrer'>
            {data.link.text}
          </Link>
        )}
      </ItemContent>
      <Circle />
    </ItemWrapper>
  )
}

export default TimelineItem
