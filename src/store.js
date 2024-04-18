import { configureStore } from '@reduxjs/toolkit'
import singleSlice from './componants/slice/singleSlice'

export default configureStore({
  reducer: {
    single : singleSlice
  },
})