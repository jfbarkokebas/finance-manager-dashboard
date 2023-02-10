const formatCurrency = (current: number |string): string =>{

    return current.toLocaleString(
      'pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )
}

export default formatCurrency