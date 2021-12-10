import React from "react"
import { timelineData } from "./timelineData"
import TimelineItem from "../timelineItem.js"
import { TimelineContainer } from "./styles.js"

const Timeline = () => {
  return (
    <TimelineContainer>
      {timelineData.map((data, i) => (
        <TimelineItem data={data} key={i} />
      ))}
    </TimelineContainer>
  )
}

export default Timeline
