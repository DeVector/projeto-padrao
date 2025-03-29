import EditIcon from '../../utils/img/edit-icon.png';
import DeleteIcon from '../../utils/img/trash-icon.png';

import * as S from './styles'

const Contato = () => (
  <div>
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
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
              <S.Imagen src={EditIcon} />
              <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
            <S.Imagen src={EditIcon} />
            <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
            <S.Imagen src={EditIcon} />
            <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
              <S.Imagen src={EditIcon} />
              <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
              <S.Imagen src={EditIcon} />
              <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <th>Fulano de tal</th>
          <td>fulanodetal@mail.com</td>
          <td>+55(99)99999-9999</td>
          <td>
            <div>
              <S.Imagen src={EditIcon} />
              <S.Imagen src={DeleteIcon} />
            </div>
          </td>
        </tr>
      </tbody>
    </S.Tabale>
  </div>
)

export default Contato
