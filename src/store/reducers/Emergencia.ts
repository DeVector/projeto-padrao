import { createSlice } from "@reduxjs/toolkit"

import Emergencia from "../../models/Emergencia"

type EmergenciasState = {
  itens: Emergencia[];
}

const initialState: EmergenciasState = {
  itens: [
    {
      numero: 180,
      nome: "Delegacia da Mulher",
      id: 1
    },
    {
      numero: 190,
      nome: "Policia Militar",
      id: 2
    },
    {
      numero: 191,
      nome: "PRF",
      id: 3
    },
    {
      numero: 198,
      nome: "PR Estadual",
      id: 4
    },
    {
      numero: 192,
      nome: "SAMU",
      id: 5
    },
    {
      numero: 193,
      nome: "Bombeiro Civil",
      id: 6
    },
    {
      numero: 194,
      nome: "Policia Federal",
      id: 7
    },
    {
      numero: 197,
      nome: "Policia Civil",
      id: 8
    }
  ]
}

const emergenciaSlice = createSlice({
  name: 'emergencias',
  initialState,
  reducers: {}
})

export default emergenciaSlice.reducer;
