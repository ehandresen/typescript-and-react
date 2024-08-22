import { useState } from 'react';

function Form() {
  const [description, setDescription] = useState<string>('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setDescription(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form-input" type="text" onChange={handleInput} />
      <button className="btn btn-center" type="submit">
        click me
      </button>
    </form>
  );
}

export default Form;
