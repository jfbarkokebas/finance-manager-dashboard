const formateDate =(date:string): string=>{
  const dateDate = new Date(date)

  const year = dateDate.getFullYear()

  const day = dateDate.getDate() +1 > 9 
    ? dateDate.getDate() +1 : `0${dateDate.getDate() +1}`

  const month = dateDate.getMonth() + 1 > 9 
  ? dateDate.getMonth() +1 : `0${dateDate.getMonth() +1}`

  return `${day}/${month}/${year}`
}

export default formateDate