
import { Container, Controllers, TitleContainer } from './styles'


const ContentHeader = () => {
  return (
    <Container>
     <TitleContainer>
      <h1>Titulo</h1>
     </TitleContainer>
      <Controllers>
        <button>botao A</button>
        <button>botao b</button>
      </Controllers>
    </Container>

    
  )
}

export default ContentHeader