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

  return (
    <section>
      <Form addTask={addTask} />
      <List />
    </section>
  );
}
export default Component;
