import { useMemo} from 'react'
import { useParams } from 'react-router-dom'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinaceCard/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput/SelectInput'
import { Container, Content, Filters } from './styles'

import months from '../../repositories/months'
import years from '../../repositories/years'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'


const List = () => {
   
  const params = useParams()  

  const contentParams = useMemo(()=>{
    return params.type === 'entries-balance'? 
    {
      title: 'Entradas',
      lineColor:'#F7931B',
      repo: gains,
    }: {
      title: 'Saídas',
      lineColor:'#E44C4E',
      repo: expenses,
    }
  },[params.type]) 


  
  

  return (
    <Container>
      <ContentHeader title={contentParams.title }  lineColor={contentParams.lineColor}>
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button 
        type="button"
        className='tag-filter filter-recurrent'>
          Recorrentes
        </button>
        
        <button 
        type="button"
        className='tag-filter filter-eventual'>
          Eventuais
        </button>
      </Filters>

      <Content>
        {contentParams.repo.map((c)=>(

          <HistoryFinanceCard
          key={String(Date.now() * Math.random())}
          tagColor= {c.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'}
          title= {c.description}
          subtitle={c.date}
          amount={c.amount}
          />

        ))}
      </Content>
    </Container>
  )
}

export default List