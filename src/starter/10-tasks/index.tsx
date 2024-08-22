import List from './List';
import Form from './Form';
import type { Task } from './types';
import { useState } from 'react';

function Component() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
