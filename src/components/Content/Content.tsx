import React from 'react'
import { PropsChildren } from '../../Types/types'
import { Container } from './styles'



const Content: React.FC<PropsChildren> = ({children}) => {
  return (
    <Container>
     {children}
    </Container>
  )
}

export default Content