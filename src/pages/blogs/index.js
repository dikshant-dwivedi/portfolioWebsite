import React, { useEffect, useState } from "react";
import { Loader } from "./../../components/loader/index";
import { AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../../config/pageTransitions";
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
} from "./styles";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [startRendering, setStartRendering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
      setStartRendering(true);
    }, 1000);
  }, []);

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence exitBeforeEnter>
        {loading && <Loader key="loader" />}
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
              <video loop="true" autoplay="autoplay" muted>
                <source src="assets/videos/video.mp4" type="video/mp4" />
              </video>
            </Banner2>
            <Banner3></Banner3>
            <Banner4>
              <video loop="true" autoplay="autoplay" muted>
                <source src="assets/videos/video2.mp4" type="video/mp4" />
              </video>
            </Banner4>
            <Banner5></Banner5>
            <Banner6></Banner6>
            <OverLay>
              <CardContainer>
                <Card1
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog1.PNG"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/weighted-union-and-find-operations-in-disjoint-subsets-data-structure-339cbd166616"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Weighted union and find operations in disjoint subsets
                        data structure
                      </a>
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
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog2.jpg"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/lesson-learnt-the-hard-way-how-projects-helped-me-learn-web-development-9ad27c3b3aa8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lesson learnt the hard way: how projects helped me learn
                        web development.
                      </a>
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
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog3.PNG"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/binary-search-2abde8f03dd2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Understanding Binary Search
                      </a>
                    </Title>
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
                  <Status>Published on Jul 28, 2021 · 8 min read</Status>
                </Card3>
                <Card4
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog4.jpg"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/crop-yield-forecasting-using-machine-learning-models-ccd2f6f19b35"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Crop Yield Forecasting using Machine Learning Models
                      </a>
                    </Title>
                    <Description>
                    Yield evaluation, or the capacity to anticipate agricultural output consistently before the reaping 
                    of crops, poses a major challenge in addressing food safety defiance.  Farmers are finding it harder to predict temperature 
                    and rainfall patterns due to the unpredictability produced by the side effects 
                    of global warming, which has an influence on agricultural production productivity. In this article, We will look at a scalable, 
                    accurate, and low-cost strategy for predicting agricultural yields using publicly 
                    available remote sensing data
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Convolutional neural network</Tag>
                    <Tag>Deep Learning/Artificial Neural Network</Tag>
                    <Tag>Long Short-Term Memory/Recurrent Neural Network</Tag>
                    <Tag>Gaussian Process</Tag>
                  </Tags>
                  <Status>Published on Jul 18, 2022 · 7 min read</Status>
                </Card4>
                <Card5
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog5.jpg"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/the-town-of-books-a-readers-heaven-286bb135cc53"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The town of books: A reader’s heaven
                      </a>
                    </Title>
                    <Description>
                      Let’s take a trip: you’re on holiday and you’re walking
                      down the street. You look up and see a bookstore. Of
                      course, what better way to spend the cold evenings if not
                      with a book and a nice fireplace. So, you turn to enter
                      and realize that the street is full of bookstores. All
                      sorts, no less — from the rarest ones to new releases.
                      Nope, you’re not in heaven. This is Hay-on-Wye, or, as it
                      is more popularly known, the ‘town of books’.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Welsh</Tag>
                    <Tag>Book Lovers</Tag>
                    <Tag>Book Stores</Tag>
                    <Tag>Festival</Tag>
                  </Tags>
                  <Status>Published on Jul 18, 2022 · 2 min read</Status>
                </Card5>
                <Card6
                  className="tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={2000}
                  gyroscope={false}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0.8}
                  glareBorderRadius="15px"
                >
                  <Image url="/assets/images/blogs/blog6.jpg"></Image>
                  <Body>
                    <Title>
                      <a
                        href="https://dikshantdwivedi055.medium.com/travelling-green-and-sustainable-8a1fad345f1d"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ol’au Palau: Travelling green and sustainable
                      </a>
                    </Title>
                    <Description>
                      An initiative that allows tourists to accumulate points in
                      a dedicated app by “demonstrating responsible and
                      regenerative behavior during their stay”. All you have to
                      do is try to offset your carbon footprint using Palau’s
                      personal carbon calculator. You can also get points for
                      using reef-safe sunscreen, eating sustainably sourced
                      local food, and eschewing disposable plastics.
                    </Description>
                  </Body>
                  <Tags>
                    <Tag>Travelling</Tag>
                    <Tag>Sustainability and environment</Tag>
                    <Tag>Oceania</Tag>
                    <Tag>Lifestyle</Tag>
                  </Tags>
                  <Status>Published on Jul 18, 2022 · 2 min read</Status>
                </Card6>
              </CardContainer>
            </OverLay>
          </Section1>
        </>
      )}
    </Container>
  );
}

export default Blog;
