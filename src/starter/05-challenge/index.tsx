type Props = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};

function Component({ type, name, email }: Props) {
  return (
    <div>
      <div
        className={`alert ${
          type === 'basic' ? 'alert-success' : 'alert-danger'
        }`}
      >
        <h2>User: {name}</h2>
        {email ? <h2>Email: {email}</h2> : null}
      </div>
    </div>
  );
}
export default Component;
