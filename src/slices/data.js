import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const datasSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    AddData: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { AddData } = datasSlice.actions
export default datasSlice.reducer