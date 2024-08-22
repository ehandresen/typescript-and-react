import List from './List';
import Form from './Form';
import type { Task } from './types';
import { useState } from 'react';

function Component() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  console.log(taskList);

  const addTask = (task: Task): void => {
    if (task) {
      setTaskList([...taskList, task]);
    }
  };

  const toggleTask = (task: Task): void => {
    if (task) {
      task.isCompleted = !task.isCompleted;
      console.log(task.isCompleted);
    }
  };

  return (
    <section>
      <Form addTask={addTask} />
      <List toggleTask={toggleTask} list={taskList} />
    </section>
  );
}
export default Component;
