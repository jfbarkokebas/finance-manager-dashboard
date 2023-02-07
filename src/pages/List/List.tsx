import React from 'react'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import SelectInput from '../../components/SelectInput/SelectInput'
import { Container } from './styles'

const List = () => {
  const pets =[
    {value:'Tobby', label:'Tobby'},
    {value:'Ally', label:'Ally'},
    {value:'Meg', label:'Meg'},
    {value:'Mia', label:'Mia'}, 
  ]
  return (
    <Container>
      <ContentHeader title='Saídas' lineColor='#E44C4E'>
        <SelectInput options={pets}/>
      </ContentHeader>
    </Container>
  )
}

export default List