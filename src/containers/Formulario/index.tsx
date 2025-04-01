import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cadastrar } from '../../store/reducers/contatos';

import { Botao, BotaoSalvar, MaskedInput, Titulo } from "../../styles";
import { Campo, Form, MainContainer } from "./styles";

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="NOME"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="EMAIL"
        />
        <MaskedInput
          mask="(00) 0 0000-0000"
          value={telefone}
          onAccept={(value) => setTelefone(value)}
          unmask={false}
          placeholder="(00) 0 0000-0000"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <Botao onClick={() => navigate("/")}>Voltar a lista de tarefas</Botao>
      </Form>
    </MainContainer>
  )
}

export default Formulario
