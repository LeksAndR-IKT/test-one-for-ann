import React, {useEffect} from "react";
import { useSelector } from 'react-redux';
import { Check, OctagonX } from 'lucide-react';

import { useAppDispatch } from '../../redux/hooks.ts';
import { fetchTodos, compliteTodo, deleteTodo, Todo } from '../../pages/ToDoSlice.ts';

const Elements: React.FC = () => {
    const { todos, loading } = useSelector((state: any) => state.todos);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodos());
      }, [dispatch]);

    return <div>
        {loading && <p>Loading...</p>}
      <ul >
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button onClick={() => dispatch(compliteTodo(todo.id))} ><Check width={15} height={15}/></button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} ><OctagonX width={15} height={15}/></button>
          </li>
        ))}
      </ul>
    </div>
}

export default React.memo(Elements);