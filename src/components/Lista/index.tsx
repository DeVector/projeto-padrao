import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


import { editar, remover } from '../../store/reducers/contatos';

import EditIcon from '../../utils/img/edit-icon.png';
import DeleteIcon from '../../utils/img/trash-icon.png';
import CheckIcon from '../../utils/img/check-button-icon.png';
import CloseIcon from '../../utils/img/close-icon.png';
import contatoClass from '../../models/Contato';

import * as S from './styles'
import { MaskedInput } from '../../styles';

type Props = contatoClass;

const Contato = ({
  id,
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {

  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if(emailOriginal.length > 0){
      setEmail(emailOriginal)
    }
    if(telefoneOriginal.length > 0){
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Linha estaEditando={estaEditando}>
      <th>{nome}</th>
      <td>
        {estaEditando ? (
            <S.EditArea
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            email
          )}
      </td>
      <td>
        {estaEditando ? (
          <MaskedInput
            mask="(00) 0 0000-0000"
            value={telefone}
            onAccept={(value) => setTelefone(value)}
            unmask={false} // Mantém a máscara no valor
          />
          ) : (
            telefone
          )}
      </td>
      <td>
        <div>
          {estaEditando ? (
            <>
              <S.Button onClick={ () => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}>
                <S.Imagen src={CheckIcon}/>
              </S.Button>
              <S.Button onClick={cancelarEdicao}>
                <S.Imagen src={CloseIcon} />
              </S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => setEstaEditando(true)}>
                <S.Imagen src={EditIcon}/>
              </S.Button>
              <S.Button onClick={() => dispatch(remover(id))}>
                <S.Imagen src={DeleteIcon}/>
              </S.Button>
            </>
          ) }
        </div>
      </td>
    </S.Linha>
  )
}

export default Contato
