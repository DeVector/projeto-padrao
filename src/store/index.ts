import { configureStore } from "@reduxjs/toolkit";

import emergenciaReducer from './reducers/Emergencia';

const store = configureStore({
  reducer:{
    emergencias: emergenciaReducer,
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store;
