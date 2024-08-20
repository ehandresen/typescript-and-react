import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // here we need to set the type of the event ourself's, or else it will be type: any
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    console.log(data);

    const text = formData.get('text') as string;

    const person: Person = {
      name: data.text as string,
    };
  };

  return (
    <div>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)} // for inline function typescript will infers the type of the event for us
        />
        <input
          type="email"
          className="form-input mb-1"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
}
export default Component;
