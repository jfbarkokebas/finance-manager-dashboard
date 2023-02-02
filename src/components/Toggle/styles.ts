import styled from 'styled-components'
import Switch, {ReactSwitchProps} from 'react-switch'
import ReactSwitch from 'react-switch'


export const Container = styled.div`
 display: flex;
 align-items: center;
`
export const ToggleLabel = styled.span`
 color: ${props => props.theme.color.white};
`
//como o switch é uma biblioteca a forma de usar é STYLED(SWITCH):
//ATTRS traz as propriedades e <> mostra de onde virão elas
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({theme})=>({
    onColor: theme.color.info,
    offColor: theme.color.warning

  }))<ReactSwitchProps>`
    margin: 0 8px;
  ` 
