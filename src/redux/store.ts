import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  filter  from './slices/filterSlice'
import cart from './slices/cartSlice'
import pizza from './slices/pizzaSlice'

const rootReducer = combineReducers({filter,cart,pizza})

export const store = configureStore({
  reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch