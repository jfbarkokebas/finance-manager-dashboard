import React from 'react'
import Layout from './components/Layout/Layout'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import ligth from './styles/themes/ligth'
import Dashboard from './pages/Dashboard/Dashboard'
import List from './pages/List/List'



const App = () => {
  return (
    <ThemeProvider theme={dark}>      
       <GlobalStyles/>

       <Layout>
        <List/>
        </Layout>  

    </ThemeProvider>
  )
}

export default App