import { useState, useEffect } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import {
  Container,
  PrimaryContainer,
  SecondaryContainer,
  PrimaryImageContainer,
  SecondaryImageContainer,
  Image,
} from "./styles.js"

const Carousel = () => {
  const [productIds, setProductIds] = useState([
    "37123c",
    "71677c",
    "dda77b",
    "e55934",
    "cdaca1",
    "ccfbfe",
    "1f0812",
    "b98b82",
  ])
  const [primaryProduct, setPrimaryProduct] = useState("945d5e")

  useEffect(() => {
    const interval = setInterval(() => {
      const currentProductId = primaryProduct
      const id = productIds[0]
      const newProductIds = [
        ...productIds.filter((x) => x !== id),
        currentProductId,
      ]
      setPrimaryProduct(id)
      setProductIds(newProductIds)
    }, 3000)
    return () => clearInterval(interval)
  }, [primaryProduct, productIds])

  const setAsPrimary = (id) => {
    const currentProductId = primaryProduct
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ]
    setPrimaryProduct(id)
    setProductIds(newProductIds)
  }

  return (
    <Container>
      <AnimateSharedLayout type='crossfade'>
        <PrimaryContainer>
          <AnimatePresence>
            <PrimaryImageContainer
              bgColor={primaryProduct}
              key={primaryProduct}
              layoutId={`product-${primaryProduct}`}
            >
              <Image />
            </PrimaryImageContainer>
          </AnimatePresence>
        </PrimaryContainer>
        <SecondaryContainer>
          <AnimatePresence>
            {productIds.map((id) => (
              <SecondaryImageContainer
                bgColor={id}
                key={id}
                onClick={() => setAsPrimary(id)}
                layoutId={`product-${id}`}
              >
                <Image whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
              </SecondaryImageContainer>
            ))}
          </AnimatePresence>
        </SecondaryContainer>
      </AnimateSharedLayout>
    </Container>
  )
}

export default Carousel
