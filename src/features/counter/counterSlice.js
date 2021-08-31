import {  createSlice } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'card',
//   initialState: {
//     name : '',
    
//   },
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export  counterSlice.reducer
// export const changeValueAction = createAction('changeValue2');

//  const counterName = createSlice({
//   name: 'test',
//   initialState: {
//     value: "Khang",
//   },
//   reducers: {
//     changeValueAction: (state, action) =>{
//       debugger
//       state.value = action.payload;
//     }
//   }
// })

// export const { changeValueAction} = counterName.actions
// export default counterName.reducer

const setUserData = createSlice({
  name: 'data',
  initialState: {
    userName: "Đăng nhập",
    card: []
  },
  reducers: {
    changeUserData: (state, action) =>{
      state.userName = action.payload.username;
    },
    changeCardData:(state,action) =>{
      state.card.push(action.payload);
    }
  }
})

export const { changeUserData , changeCardData} = setUserData.actions
export default setUserData.reducer