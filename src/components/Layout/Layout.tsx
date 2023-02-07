import React from 'react'
import { PropsChildren } from '../../Types/types'
import Aside from '../Aside/Aside'
import Content from '../Content/Content'
import MainHeader from '../MainHeader/MainHeader'
import { Grid } from './styles'



const Layout: React.FC<PropsChildren> = ({children}) => {
  return (
    <Grid>
      <MainHeader/>
      <Aside/>
      <Content>
        {children}
      </Content>
    </Grid>
  )
}

export default Layout