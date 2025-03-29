import { Titulo } from '../../styles';
import * as S from './styles';

const BarraLateral = () => (
  <S.Aside>
    <Titulo>Contatos de Emergencia</Titulo>
    <S.Filtros>
      <S.Card>
        <S.Contador>180</S.Contador>
        <S.Label>Delegacia da Mulher</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>190</S.Contador>
        <S.Label>Policia Militar</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>191</S.Contador>
        <S.Label>PR Federal</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>198</S.Contador>
        <S.Label>PR Estadual</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>192</S.Contador>
        <S.Label>SAMU</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>193</S.Contador>
        <S.Label>Bombeiro Militar</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>194</S.Contador>
        <S.Label>Policia Federal</S.Label>
      </S.Card>
      <S.Card>
        <S.Contador>197</S.Contador>
        <S.Label>Policia Civil</S.Label>
      </S.Card>
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral;
