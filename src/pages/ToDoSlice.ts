import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Первое тестовое задание выполнено', completed: false },
        { id: 2, title: 'Второе тестовое задание выпонено', completed: false },
      ]);
    }, 1000);
  });
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    compliteTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
  },
});

export const { addTodo, compliteTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;