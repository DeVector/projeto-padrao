import { createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato"

type ContatoState = {
  itens: Contato[];
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Victor Oliveira',
      email: 'victoroliveira@mail.com',
      telefone: '99111111111'
    },
    {
      id: 2,
      nome: 'Loren Oliveira',
      email: 'lorenoliveira@mail.com',
      telefone: '99222222222'
    },
    {
      id: 3,
      nome: 'Dark Oliveira',
      email: 'darkoliveira@mail.com',
      telefone: '99333333333'
    },
    {
      id: 4,
      nome: 'Redivania Oliveira',
      email: 'redivaniaoliveira@mail.com',
      telefone: '99444444444'
    },
    {
      id: 5,
      nome: 'Rivanildo Oliveira',
      email: 'rivanildooliveira@mail.com',
      telefone: '99555555555'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers:{}
})

export default contatoSlice.reducer;
