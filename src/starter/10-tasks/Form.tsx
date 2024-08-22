import { useState } from 'react';
import { Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [description, setDescription] = useState<string>('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setDescription(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!description) {
      alert('please enter a task');
      return;
    }

    const newTask: Task = {
      id: Math.random().toString(),
      description,
      isCompleted: false,
    };

    addTask(newTask);
    setDescription('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={description}
        className="form-input mb-1"
        type="text"
        onChange={handleInput}
      />
      <button className="btn btn-center" type="submit">
        click me
      </button>
    </form>
  );
}

export default Form;
