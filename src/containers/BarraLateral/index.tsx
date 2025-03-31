import { useSelector } from 'react-redux';

import { Titulo } from '../../styles';
import * as S from './styles';
import { RootReducer } from '../../store';

const BarraLateral = () => {
  const { itens } = useSelector((state: RootReducer) => state.emergencias)

  return (
    <S.Aside>
      <Titulo>Contatos de Emergencia</Titulo>
      <S.Filtros>
          {itens.map((e) => (
            <S.Card>
              <S.Contador>{e.numero}</S.Contador>
              <S.Label>{e.nome}</S.Label>
            </S.Card>
          ))}
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral;
