import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { IPizza } from '../../interfaces';

export interface ParamsType {
    sortType: string,
    debouncedKeywords: string,
    activeCategory: number,
    currentPage: number
}

export const fetchPizzas = createAsyncThunk<IPizza[], ParamsType>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {
        sortType,
        debouncedKeywords,
        activeCategory,
        currentPage
    } = params;
    
    const { data } = await axios.get<IPizza[]>(
      `https://6892272c447ff4f11fbf60cb.mockapi.io/items?page=${currentPage}&search=${debouncedKeywords}&limit=4&${activeCategory > 0 ? `category=${activeCategory}` : ''}&sortBy=${sortType}`
    );
    return data;
  }
)

interface PizzaState {
  items: IPizza[],
  status: 'loading' | 'success' | 'error' // Более конкретный тип
}

const initialState: PizzaState = {
  items: [],
  status: 'loading'
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  }
})

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;