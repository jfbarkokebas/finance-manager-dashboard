import React from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import GlobalStyles from './styles/globalStyles'

import dark from './styles/themes/dark'
import ligth from './styles/themes/ligth'


const App:React.FC = () => {
  return (
    <ThemeProvider theme={dark}>      
      <GlobalStyles/>    
      <Routes/>
    </ThemeProvider>
  )
}

export default App