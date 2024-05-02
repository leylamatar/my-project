import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false, //bu duruma bağlı
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    
    
    modalFunc: (state) => {
        //tersini alma yani aç kapa
      state.modal = !state.modal
    },
  },
})

// Action creators are generated for each case reducer function
export const { modalFunc } = modalSlice.actions

export default modalSlice.reducer