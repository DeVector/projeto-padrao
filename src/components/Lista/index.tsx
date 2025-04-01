import EditIcon from '../../utils/img/edit-icon.png';
import DeleteIcon from '../../utils/img/trash-icon.png';
import CheckIcon from '../../utils/img/check-button-icon.png';
import CloseIcon from '../../utils/img/close-icon.png';
import contatoClass from '../../models/Contato';

import * as S from './styles'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type Props = contatoClass;

const Contato = ({
  id,
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {

  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefone, setTelefone] = useState<string>('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if(emailOriginal.length > 0){
      setEmail(emailOriginal)
    }
    if(telefoneOriginal.length > 0){
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

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
            <S.EditArea
              type='tel'
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          ) : (
            telefone
          )}
      </td>
      <td>
        <div>

          <S.Button>
            <S.Imagen src={estaEditando ? CheckIcon : EditIcon} />
          </S.Button>
          <S.Button>
            <S.Imagen src={estaEditando ? CloseIcon : DeleteIcon} />
          </S.Button>
        </div>
      </td>
    </S.Linha>
  )
}

export default Contato
