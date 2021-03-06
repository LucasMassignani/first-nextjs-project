import { useState, useCallback } from 'react'

function Home() {
  const [contador, setContador] = useState(0)

  const adicionarContador = useCallback(()=>{
    setContador((state)=>{
      return state+1
    })
  },[])

  return (
    <div>
      <h1>Hello world {contador}</h1>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home