import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://github.com/GedeonNzemba">Github Profile</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nzemba/">Linkdlin Profile</a>
          </li>
          <li>
            <a href="nzemba48@gmail.com">Email Address</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
