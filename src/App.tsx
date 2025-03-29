import React from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaContato from './containers/ListaContato'
import BarraLateral from './containers/BarraLateral'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContato />
      </Container>
    </>
  )
}

export default App
