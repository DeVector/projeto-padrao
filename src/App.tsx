import { Provider } from 'react-redux'
import store from './store'

import EstiloGlobal, { Container } from './styles'

import ListaContato from './containers/ListaContato'
import BarraLateral from './containers/BarraLateral'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContato />
      </Container>
    </Provider >
  )
}

export default App
