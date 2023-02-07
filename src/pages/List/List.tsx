import React from 'react'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinaceCard/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput/SelectInput'
import { Container, Content } from './styles'

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
      <Content>
        <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
         <HistoryFinanceCard
        cardColor='#313862'
        tagColor='#E44C4E'
        title='Conta de Luz'
        subtitle='27/07/2022'
        amount='160,00'
         />
      </Content>
    </Container>
  )
}

export default List