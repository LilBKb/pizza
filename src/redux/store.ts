import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  filter  from './slices/filterSlice'
import cart from './slices/cartSlice'

const rootReducer = combineReducers({filter,cart})

export const store = configureStore({
  reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch