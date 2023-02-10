import logoImg from '../../assets/logo.svg'
import { Container, Header, LogoImg, MenuItemLink, MenuContainer, Title } from './styles'
import {
  MdDashboard, 
  MdArrowDownward,  
  MdArrowUpward,   
  MdExitToApp
} from 'react-icons/md'

const Aside = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt='Logo minha carteira' />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href='/dashboard'> 
          <MdDashboard/>
          Dashboard
        </MenuItemLink>

        <MenuItemLink href='/list/entries-balance'>
          <MdArrowUpward/> 
          Entradas
        </MenuItemLink>

        <MenuItemLink href='/list/exits-balance'>
          <MdArrowDownward/> 
          Saídas
        </MenuItemLink>

        <MenuItemLink href='#'>
          <MdExitToApp/> 
          Sair
        </MenuItemLink>

      </MenuContainer>
    </Container>
  )
}

export default Aside