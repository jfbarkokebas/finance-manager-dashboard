
import { useState } from 'react'
import {Container, ToggleLabel, ToggleSelector } from './styles'


const Toggle = () => {

  const [online, setOnline] = useState(false)

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
      uncheckedIcon={false}
      checkedIcon={false}
      checked={online}
      onChange={()=> setOnline(!online)
      }/>
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle