import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'setData',
  initialState,
  reducers: {
    AddData: (state, action) => {
      return action.payload;
    },
  },
})

export const { AddData } = dataSlice.actions
export default dataSlice.reducer