import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers:{
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (c) => c.email.toLocaleLowerCase() === action.payload.email.toLocaleLowerCase() && c.telefone === action.payload.telefone
      )

      if (contatoJaExiste) {
        alert('Contato ja existente na lista')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export default contatoSlice.reducer;
