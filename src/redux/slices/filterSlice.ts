import { createSlice } from '@reduxjs/toolkit'


interface FilterState {
  activeCategory:number,
  sort:{
    name:string,
    property:string,
  },
  currentPage:number
}


const initialState: FilterState = {
  activeCategory:0,
  sort:{
    name:'Популярности',
    property:'rating',
  },
  currentPage:1
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state,action) => {
      state.activeCategory = action.payload
    },
    setActiveSort:(state,action)=>{
        state.sort=action.payload
    },
    setCurrentPage:(state,action)=>{
      state.currentPage=action.payload
    }
  },
})

export const { setActiveCategory,setActiveSort,setCurrentPage} = filterSlice.actions

export default filterSlice.reducer