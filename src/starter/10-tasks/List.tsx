import { Task } from './types';

type ListProps = {
  list: Task[];
  toggleTask: (task: Task) => void;
};

function List({ list, toggleTask }: ListProps) {
  return (
    <ul className="list">
      {list.map((task) => (
        <li key={task.id}>
          {task.isCompleted ? <s>{task.description}</s> : task.description}
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTask(task)}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
