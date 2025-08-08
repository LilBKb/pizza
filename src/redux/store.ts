import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  filter  from './slices/filterSlice'


const rootReducer = combineReducers({filter})

export const store = configureStore({
  reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch