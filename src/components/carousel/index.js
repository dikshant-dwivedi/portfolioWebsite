import { useState, useEffect } from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import {
  Container,
  PrimaryContainer,
  SecondaryContainer,
  PrimaryImageContainer,
  SecondaryImageContainer,
  Image,
  TextContainerDesktop,
  TextContainerMobile,
  ProjectHeading,
  ProjectDescription,
  MobileContainer,
} from "./styles.js"
import { carouselData } from "./carouselData.js"

const Carousel = () => {
  const [products, setProducts] = useState(carouselData.slice(1))
  const [primaryProduct, setPrimaryProduct] = useState(carouselData[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentProduct = primaryProduct
      const product = products[0]
      const newProducts = [
        ...products.filter((x) => x.id !== product.id),
        currentProduct,
      ]
      setPrimaryProduct(product)
      setProducts(newProducts)
    }, 5000)
    return () => clearInterval(interval)
  }, [primaryProduct, products])

  const setAsPrimary = (product) => {
    const currentProduct = primaryProduct
    const newProducts = [
      ...products.filter((x) => x.id !== product.id),
      currentProduct,
    ]
    setPrimaryProduct(product)
    setProducts(newProducts)
  }

  return (
    <MobileContainer>
      <Container>
        <AnimateSharedLayout type='crossfade'>
          <PrimaryContainer>
            <AnimatePresence>
              <PrimaryImageContainer
                bgColor={primaryProduct.id}
                key={primaryProduct.id}
                layoutId={`product-${primaryProduct.id}`}
              >
                <Image
                  src={primaryProduct.imageUrl}
                  alt={primaryProduct.title}
                  showShadow={true}
                />
                <TextContainerDesktop>
                  <ProjectHeading>{primaryProduct.title}</ProjectHeading>
                  <ProjectDescription>
                    {primaryProduct.description}
                  </ProjectDescription>
                </TextContainerDesktop>
              </PrimaryImageContainer>
            </AnimatePresence>
          </PrimaryContainer>
          <SecondaryContainer>
            <AnimatePresence>
              {products.map((product) => (
                <SecondaryImageContainer
                  bgColor={product.id}
                  key={product.id}
                  onClick={() => setAsPrimary(product)}
                  layoutId={`product-${product.id}`}
                  content={product.title}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    showShadow={false}
                  />
                </SecondaryImageContainer>
              ))}
            </AnimatePresence>
          </SecondaryContainer>
        </AnimateSharedLayout>
      </Container>
      <TextContainerMobile>
        <ProjectHeading>{primaryProduct.title}</ProjectHeading>
        <ProjectDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {primaryProduct.description}
        </ProjectDescription>
      </TextContainerMobile>
    </MobileContainer>
  )
}

export default Carousel
