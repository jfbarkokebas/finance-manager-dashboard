const idGenerate = ():number=>{
  return Date.now() * Math.random()
}

export default idGenerate