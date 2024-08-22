import { Task } from './types';

type ListProps = {
  list: Task[];
  toggleTask: (task: Task) => void;
};

function List({ toggleTask, list }: ListProps) {
  return (
    <ul className="list">
      {list.map((task) => (
        <li key={task.id}>
          {task.description}
          <input type="checkbox" onChange={() => toggleTask(task)} />
        </li>
      ))}
    </ul>
  );
}

export default List;
