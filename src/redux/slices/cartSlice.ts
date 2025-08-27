import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartItems{
    id:number,
    title:string,
    price:number,
    imageUrl:string,
    type:number,
    size:number,
    count:number
}
interface CartState {
  totalPrice:number,
  items:CartItems[]
}


const initialState: CartState = {
  totalPrice:0,
  items:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItems, 'count'>>) => {
      const findItem=state.items.find((obj)=>obj.id === action.payload.id);
    
      if (findItem){
        findItem.count++
      }else{
        state.items.push({...action.payload,count:1})
      }
      state.totalPrice=state.items.reduce((sum,obj)=>{
        return obj.price*obj.count+sum
      },0)

    },
    removeItem:(state, action: PayloadAction<number>)=>{
        state.items=state.items.filter((obj)=>obj.id !== action.payload)
    },
    clearCart:(state)=>{
        state.items=[]
    },
    minusItem:(state, action: PayloadAction<number>)=>{
       const findItem=state.items.find((obj)=>obj.id === action.payload);
       if (findItem){
        findItem.count--;
        state.totalPrice=state.items.reduce((sum,obj)=>{
        return sum-obj.price
      },state.totalPrice)
      if (findItem.count === 0) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
      }
    }
  },
})

export const { addItem,removeItem,clearCart,minusItem} = cartSlice.actions

export default cartSlice.reducer