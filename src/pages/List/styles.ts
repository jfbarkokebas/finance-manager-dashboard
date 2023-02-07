import styled from 'styled-components';

export const Container = styled.div`
 
`
export const Content = styled.div`
 
`

export const Filters = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-bottom: 30px;

  .tag-filter{
    font-size: 18px;
    font-weight: 500;
    background: none;
    margin: 0 10px;
    color: ${props => props.theme.color.white};
    transition: all .3s;

    &:hover{
      opacity: .7;
      transform: scale(1.03);
    }  

  }

  .filter-recurrent::after{
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.color.warning} ;
    }

    .filter-eventual::after{
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.color.success} ;
    }
`