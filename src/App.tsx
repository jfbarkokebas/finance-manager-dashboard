import Layout from './components/Layout/Layout'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import ligth from './styles/themes/ligth'



const App = () => {
  return (
    <ThemeProvider theme={dark}>      
       <GlobalStyles/>
       <Layout/>    
    </ThemeProvider>
  )
}

export default App