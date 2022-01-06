import React from "react"
import ProjectCard from "../../components/projectCard/index.js"
import { Container } from "./styles"
import { listData } from "./listData.js"

const ProjectListContainer = () => {
  let n = listData.length

  return (
    <Container n={n}>
      {listData.map((cardData, i) => (
        <ProjectCard key={i} cardData={cardData} />
      ))}
    </Container>
  )
}

export default ProjectListContainer
