import { useMemo, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content, Filters } from './styles'
//components
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinaceCard/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput/SelectInput'
//repositórios
import months from '../../repositories/months'
import years from '../../repositories/years'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
//utils
import formatCurrency from '../../utils/formatCurrency'
import formateDate from '../../utils/formateDate'


const List = () => {
   
  const params = useParams() 
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() +1)) 
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())) 
  const [filteredRepo, setFilteredRepo] = useState<string[] >([])
  

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
        <SelectInput 
        options={months} 
        onChange ={ e=>{setMonthSelected(e.target.value)}}
        defaultValue={monthSelected}/>
        <SelectInput 
        options ={years}
        onChange ={ e=>{setYearSelected(e.target.value)}}
        defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters >
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
        {contentParams.repo
          .filter(item =>{
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())
        
            return month === monthSelected && year === yearSelected
          })
          .map((c)=>(

          <HistoryFinanceCard
          key={String(Date.now() * Math.random())}
          tagColor= {c.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'}
          title= {c.description}
          subtitle={formateDate(c.date)}
          amount={formatCurrency(Number(c.amount))}
          />

        ))}
      </Content>
    </Container>
  )
}

export default List