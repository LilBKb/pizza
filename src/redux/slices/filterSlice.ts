import { createSlice } from '@reduxjs/toolkit'


interface FilterState {
  activeCategory:number,
  sort:{
    name:string,
    property:string
  }
}


const initialState: FilterState = {
  activeCategory:0,
  sort:{
    name:'Популярности',
    property:'rating',
  }
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
    }
  },
})

export const { setActiveCategory,setActiveSort} = filterSlice.actions

export default filterSlice.reducer