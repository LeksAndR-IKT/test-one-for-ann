import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../pages/ToDoSlice.ts';

const store = () => configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootReducerType = ReturnType<typeof todoReducer>
export type StoreType = ReturnType<typeof store>
export type AppDispatch = StoreType['dispatch']

export default store;