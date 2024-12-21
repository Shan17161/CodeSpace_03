import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos: [
        {
            id: nanoid(),
            todo: "Sample Todo"
        }
    ]
}

export const Sclice = {
    name: "MiniSclice",
    initialState,
    reducers:{
        addTodo: (state, action)=>{},
        deleteTodo: (state, action)=>{},
        updateTodo: (state, action)=>{},
        
    }
}

export const {addTodo, deleteTodo, updateTodo} = Sclice.actions
export default Sclice.reducers