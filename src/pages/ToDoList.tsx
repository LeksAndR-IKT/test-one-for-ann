import React, { useState } from 'react';

import { addTodo } from './ToDoSlice.ts';
import { useAppDispatch } from '../redux/hooks.ts';

import styles from './ToDoList.module.css'
import Elements from '../components/ToDoElements/Elements.tsx';

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), title: task.trim(), completed: false };
    dispatch(addTodo(newTodo));
    setTask('')
  };

  const onchangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTask(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1>ToDo List</h1>
      <div className={styles.addtask}>
        <input onChange={onchangeTask} value={task} />
        <button onClick={handleAddTodo} className={styles.addBtn}>Add Todo</button>
      </div>
      <div className={styles.todos}>
        <Elements />
      </div >
    </div>
  );
};

export default TodoList;