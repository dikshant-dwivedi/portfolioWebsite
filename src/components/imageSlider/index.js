import * as React from "react"
import { useState } from "react"
import { images } from "./imageData.js"

import {
  LeftArrow,
  RightArrow,
  SliderContainer,
  Image,
  ImageContainer,
  Card,
  CardTextContainer,
  TiltContainer,
  CardTitle,
} from "./styles.js"

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length)
    }, 6000)
    return () => clearInterval(interval)
  }, [length])*/

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  if (!Array.isArray(images) || length <= 0) {
    return null
  }

  return (
    <SliderContainer>
      <LeftArrow
        onClick={prevSlide}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {"<"}
      </LeftArrow>
      <RightArrow
        onClick={nextSlide}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {">"}
      </RightArrow>
      {images.map((slide, index) => (
        <ImageContainer isSlideActive={current === index} key={index}>
          <TiltContainer
            className='tilt'
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={2000}
            gyroscope={false}
            scale={1.08}
          >
            {index === current && (
              <Card>
                <Image src={slide.url} alt='blah blah' />
                <CardTextContainer>
                  <CardTitle>{slide.imageDescription}</CardTitle>
                </CardTextContainer>
              </Card>
            )}
          </TiltContainer>
        </ImageContainer>
      ))}
    </SliderContainer>
  )
}

export default ImageSlider
