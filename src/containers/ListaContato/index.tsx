import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contato from "../../components/Lista";

import { Titulo } from "../../styles";
import * as S from './styles'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    (
      <div>
        <Titulo>Meus Contatos</Titulo>
        <S.Tabale>
          <thead>
            <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {itens.map((c) => (
            <Contato
              key={c.id}
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          ))}
          </tbody>
        </S.Tabale>


      </div>
    )
  )
}

export default ListaContato
