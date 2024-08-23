import List from './List';
import Form from './Form';
import type { Task } from './types';
import { useEffect, useState } from 'react';

function Component() {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const listString = JSON.stringify(taskList);
    localStorage.setItem('tasks', listString);
  }, [taskList]);

  const addTask = (task: Task): void => {
    setTaskList([...taskList, task]);
  };

  const toggleTask = (task: Task): void => {
    task.isCompleted = !task.isCompleted;
    setTaskList([...taskList]); // trigger a re-render to update ui
  };

  return (
    <section>
      <Form addTask={addTask} />
      <List list={taskList} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
