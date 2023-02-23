import React from 'react'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import SelectInput from '../../components/SelectInput/SelectInput'
import { Container } from './style'

const Dashboard: React.FC = () => {


  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
       {/*  <SelectInput onChange={()=>{}} options={}/>
        <SelectInput onChange={()=>{}} options={}/> */}
      </ContentHeader>
    </Container>
  )
}

export default Dashboard