import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import data from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    userData : data,
  },
  middleware: [save()],
  preloadedState: load()
})
