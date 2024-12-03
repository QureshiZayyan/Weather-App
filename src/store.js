import { configureStore } from '@reduxjs/toolkit'
import datasReducer from './slices/data'

export const store = configureStore({
  reducer: {
    data: datasReducer
  },
})