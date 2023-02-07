import React from 'react'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import SelectInput from '../../components/SelectInput/SelectInput'
import { Container } from './style'

const Dashboard: React.FC = () => {

  const us =[
    {value:'Felipe', label:'Felipe'},
    {value:'Allycia', label:'Allycia'},
    {value:'Allana', label:'Allana'},
    {value:'Ayumi', label:'Ayumi'},
  ]

  const pets =[
    {value:'Tobby', label:'Tobby'},
    {value:'Ally', label:'Ally'},
    {value:'Meg', label:'Meg'},
    {value:'Mia', label:'Mia'}, 
  ]

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
        <SelectInput options={us}/>
        <SelectInput options={pets}/>
      </ContentHeader>
    </Container>
  )
}

export default Dashboard