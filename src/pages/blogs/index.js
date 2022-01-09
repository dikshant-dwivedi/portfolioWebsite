import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import {
  Container,
  Section1,
  Banner,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  OverLay,
  CardContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Image,
  Body,
  Title,
  Description,
  Tags,
  Tag,
  Status,
  Heading,
} from "./styles"

function Blog() {
  const [loading, setLoading] = useState(true)
  const [startRendering, setStartRendering] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2500)
      setStartRendering(true)
    }, 1000)
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
        {loading && <Loader key='loader' />}
      </AnimatePresence>
      {startRendering && (
        <>
          <Heading>
            To <span>Blog</span> is to <span>Create</span>, to{" "}
            <span>Share,</span> to <span>Connect,</span> to{" "}
            <span>Inspire.</span>
          </Heading>
          <Section1>
            <Banner></Banner>
            <Banner2>
              <video loop='true' autoplay='autoplay' muted>
                <source src='assets/videos/video.mp4' type='video/mp4' />
              </video>
            </Banner2>
            <Banner3></Banner3>
            <Banner4>
              <video loop='true' autoplay='autoplay' muted>
                <source src='assets/videos/video2.mp4' type='video/mp4' />
              </video>
            </Banner4>
            <Banner5></Banner5>
            <Banner6></Banner6>
            <OverLay>
              <CardContainer>
                <Card1
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
                  <Image url='/assets/images/blogs/blog1.PNG'></Image>
                  <Body>
                    <Title>
                      Weighted union and find operations in disjoint subsets
                      data structure
                    </Title>
                    <Description>
                      For the implementation of Kruskal’s algorithm, a minimum
                      spanning tree is built adding one edge at a time. Along
                      the way, we need to keep track of the connected components
                      and also detect cycles. For achieving this, it is
                      essential to understand disjoint set data structure and
                      its find-union operation.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Data structures and Algorithms</Tag>
                    <Tag>Kruskal's algorithm</Tag>
                    <Tag>Disjoint Subsets</Tag>
                    <Tag>Weighted Union and find Operation</Tag>
                  </Tags>
                  <Status>Published on Mar 24, 2021 · 5 min read</Status>
                </Card1>
                <Card2
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
                  <Image url='/assets/images/blogs/blog2.jpg'></Image>
                  <Body>
                    <Title>
                      Lesson learnt the hard way: how projects helped me learn
                      web development.
                    </Title>
                    <Description>
                      One of the earliest realizations I’ve had is how important
                      it is to stay open to learn a diverse set of technologies
                      in order to be relevant in the industry. With that being
                      said, what is the best way to learn a technology? Here’s
                      my take on it.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Web Development</Tag>
                    <Tag>MOOC Trap</Tag>
                    <Tag>Project - Waddle</Tag>
                    <Tag>Learning By Doing</Tag>
                  </Tags>
                  <Status>Published on Nov 18, 2020 · 4 min read</Status>
                </Card2>
                <Card3
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
                  <Image url='/assets/images/blogs/blog3.PNG'></Image>
                  <Body>
                    <Title>Understanding Binary Search</Title>
                    <Description>
                      The simplest way to find an element in an array is by
                      checking each element one by one until a match is found or
                      the end of the array is reached. This approach in worst
                      case scenario can lead to traversal of the whole array.
                      Given a sorted array, we can improve the efficiency of our
                      search operation by performing binary search algorithm on
                      it. Let’s start by observing the property of a sorted
                      array that makes it suitable for binary search.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Data Structures and Algorithms</Tag>
                    <Tag>Level - Beginner</Tag>
                    <Tag>Binary Search</Tag>
                    <Tag>Sorting</Tag>
                  </Tags>
                  <Status>Published on Jul 28, 2021 · 10 min read</Status>
                </Card3>
                <Card4
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
                  <Image url='/assets/images/blogs/blog1.PNG'></Image>
                  <Body>
                    <Title>
                      Weighted union and find operations in disjoint subsets
                      data structure
                    </Title>
                    <Description>
                      For the implementation of Kruskal’s algorithm, a minimum
                      spanning tree is built adding one edge at a time. Along
                      the way, we need to keep track of the connected components
                      and also detect cycles. For achieving this, it is
                      essential to understand disjoint set data structure and
                      its find-union operation.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Data structures and Algorithms</Tag>
                    <Tag>Kruskal's algorithm</Tag>
                    <Tag>Disjoint Subsets</Tag>
                    <Tag>Weighted Union and find Operation</Tag>
                  </Tags>
                  <Status>Published on Mar 24, 2021 · 5 min read</Status>
                </Card4>
                <Card5
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
                  <Image url='/assets/images/blogs/blog1.PNG'></Image>
                  <Body>
                    <Title>
                      Weighted union and find operations in disjoint subsets
                      data structure
                    </Title>
                    <Description>
                      For the implementation of Kruskal’s algorithm, a minimum
                      spanning tree is built adding one edge at a time. Along
                      the way, we need to keep track of the connected components
                      and also detect cycles. For achieving this, it is
                      essential to understand disjoint set data structure and
                      its find-union operation.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Data structures and Algorithms</Tag>
                    <Tag>Kruskal's algorithm</Tag>
                    <Tag>Disjoint Subsets</Tag>
                    <Tag>Weighted Union and find Operation</Tag>
                  </Tags>
                  <Status>Published on Mar 24, 2021 · 5 min read</Status>
                </Card5>
                <Card6
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
                  <Image url='/assets/images/blogs/blog1.PNG'></Image>
                  <Body>
                    <Title>
                      Weighted union and find operations in disjoint subsets
                      data structure
                    </Title>
                    <Description>
                      For the implementation of Kruskal’s algorithm, a minimum
                      spanning tree is built adding one edge at a time. Along
                      the way, we need to keep track of the connected components
                      and also detect cycles. For achieving this, it is
                      essential to understand disjoint set data structure and
                      its find-union operation.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Data structures and Algorithms</Tag>
                    <Tag>Kruskal's algorithm</Tag>
                    <Tag>Disjoint Subsets</Tag>
                    <Tag>Weighted Union and find Operation</Tag>
                  </Tags>
                  <Status>Published on Mar 24, 2021 · 5 min read</Status>
                </Card6>
              </CardContainer>
            </OverLay>
          </Section1>
        </>
      )}
    </Container>
  )
}

export default Blog
