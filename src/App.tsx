import React from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaContato from './containers/ListaContato'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaContato />
      </Container>
    </>
  )
}

export default App
