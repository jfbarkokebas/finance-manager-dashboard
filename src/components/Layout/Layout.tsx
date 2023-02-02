import Aside from '../Aside/Aside'
import Content from '../Content/Content'
import MainHeader from '../MainHeader/MainHeader'
import { Grid } from './styles'


const Layout = () => {
  return (
    <Grid>
      <MainHeader/>
      <Aside/>
      <Content/>
    </Grid>
  )
}

export default Layout