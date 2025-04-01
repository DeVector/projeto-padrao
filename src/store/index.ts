import { configureStore } from "@reduxjs/toolkit";

import emergenciaReducer from './reducers/Emergencia';
import contatoReducer from './reducers/contatos';

const store = configureStore({
  reducer:{
    emergencias: emergenciaReducer,
    contatos: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store;
